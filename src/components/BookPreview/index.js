import React from 'react';

const BookPreview = ({ book }) => {
  return (
    <article>
      <img src={book.image} alt={book.title} />
      {book.title}
    </article>
  );
};

export default BookPreview;
