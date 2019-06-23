import React, { useState } from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchForm from './partials/SearchForm';
import { Container, Logo } from './styles';

import withFilters from '../../containers/withFilters';

const Header = ({ setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!localSearchTerm) return;
    setLocalSearchTerm('');
    setSearchTerm(localSearchTerm);
  };
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img
            src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png"
            alt="Play livros"
          />
        </Link>
      </Logo>
      <SearchForm
        onSubmit={handleFormSubmit}
        placeholder="Pesquisar no Play Livros"
        onChange={value => setLocalSearchTerm(value)}
        value={localSearchTerm}
      />
    </Container>
  );
};

export default compose(withFilters)(Header);

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
};
