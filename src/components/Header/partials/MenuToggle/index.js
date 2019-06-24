import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const MenuToggle = ({ isOpen, onClick }) => (
  <Container isOpen={isOpen} onClick={onClick}>
    <button type="submit">
      <span />
      <span />
      <span />
    </button>
  </Container>
);

export default MenuToggle;

MenuToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
