import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Offset } from './styles';

const Menu = ({ categories, isOpen, onClick }) => {
  return (
    <>
      <Container isOpen={isOpen}>
        <nav>
          <ul>
            <li>
              <strong>CATEGORIAS</strong>
            </li>
            {categories.map(category => (
              <li key={category}>
                <NavLink exact to={`/category/${category.toLowerCase()}`}>
                  {category.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Offset isOpen={isOpen} onClick={onClick} />
    </>
  );
};

export default Menu;

Menu.propTypes = {
  categories: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
