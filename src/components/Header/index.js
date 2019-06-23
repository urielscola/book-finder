import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import SearchInput from './partials/SearchInput';
import { Container } from './styles';

import withFilters from '../../containers/withFilters';

const Header = ({ setSearchTerm, searchTerm }) => {
  const handleInputChange = value => value && setSearchTerm(value);
  return (
    <Container>
      <SearchInput
        placeholder="Pesquisar no Play Livros"
        onChange={handleInputChange}
        value={searchTerm}
      />
    </Container>
  );
};

export default compose(withFilters)(Header);

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired
};
