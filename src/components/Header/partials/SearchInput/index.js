import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Input } from './styles';

const SearchInput = ({ placeholder, onChange, value }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </Container>
  );
};

export default memo(SearchInput);

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
