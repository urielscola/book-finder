import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchForm from './partials/SearchForm';
import MenuToggle from './partials/MenuToggle';
import Menu from './partials/Menu';
import { MobileBreakpoint } from '../Responsive';
import { Container, Logo, TopMenuContainer } from './styles';
import { CATEGORIES } from '../../constants/nav';
import { toggleMenuBody } from '../../helpers/Menu';

import withFilters from '../../containers/withFilters';

const Header = ({ setSearchTerm, searchTerm, ...props }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = open => {
    toggleMenuBody(open ? 'hidden' : 'visible');
    setOpen(open);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!localSearchTerm) return;
    setLocalSearchTerm('');
    setSearchTerm(localSearchTerm);
  };
  useEffect(() => {
    toggleMenu(false);
  }, [props.location.pathname, searchTerm]);

  return (
    <Container>
      <TopMenuContainer>
        <Logo>
          <Link to="/">
            <img
              src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png"
              alt="Play livros"
            />
          </Link>
        </Logo>
        <MobileBreakpoint>
          <MenuToggle onClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
        </MobileBreakpoint>
      </TopMenuContainer>
      <SearchForm
        onSubmit={handleFormSubmit}
        placeholder="Pesquisar no Play Livros"
        onChange={value => setLocalSearchTerm(value)}
        value={localSearchTerm}
      />
      <MobileBreakpoint>
        <Menu
          categories={CATEGORIES}
          isOpen={isOpen}
          onClick={() => toggleMenu(false)}
        />
      </MobileBreakpoint>
    </Container>
  );
};

export default compose(
  withFilters,
  withRouter
)(Header);

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
};
