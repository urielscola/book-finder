import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Button = ({ label, to, external = false, ...props }) => {
  if (external)
    return (
      <a href={to} title="label" target="_blank" rel="noopener noreferrer">
        <Container {...props}>{label}</Container>
      </a>
    );
  return (
    <Link to={to}>
      <Container {...props}>{label}</Container>
    </Link>
  );
};

export default Button;
