import React from 'react';
import PropTypes from 'prop-types';
import { Author } from './styles';

const BookItemAuthors = ({ authors }) => {
  return (
    <Author>
      {authors.length > 1 ? (
        <span>{`${authors[0]} e mais`}</span>
      ) : (
        <span>{authors[0]}</span>
      )}
    </Author>
  );
};

export default BookItemAuthors;

BookItemAuthors.propTypes = {
  authors: PropTypes.array.isRequired
};
