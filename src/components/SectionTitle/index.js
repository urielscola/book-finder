import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

const SectionTitle = ({ title }) => {
  return <Title>{title} </Title>;
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};
