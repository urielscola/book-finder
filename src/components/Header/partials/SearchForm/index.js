import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { DesktopBreakpoint } from '../../../Responsive';
import { SearchIcon } from '../../../Icons';
import ButtonLink from '../../../ButtonLink';

import { Container, Form, SubmitButton, Input } from './styles';

const SearchForm = ({ placeholder, onSubmit, onChange, value }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          value={value}
        />
        <SubmitButton type="submit">
          <SearchIcon size={20} />
        </SubmitButton>
        <DesktopBreakpoint>
          <ButtonLink to="/" label="Livros" />
          <ButtonLink red to="/favorites" label="Favoritos" />
        </DesktopBreakpoint>
      </Form>
    </Container>
  );
};

export default memo(SearchForm);

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
