import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Button = ({ label, to, ...props }) => {
  return (
    <Link to={to}>
      <Container {...props}>{label}</Container>
    </Link>
  );
};

export default Button;
