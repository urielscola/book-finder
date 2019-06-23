import React from 'react';
import SectionTitle from '../SectionTitle';
import BookPreview from '../BookPreview';

const Display = ({ books }) => {
  return (
    <div>
      <SectionTitle title="Resultados para xxxx" />
      {books.map(book => (
        <BookPreview key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Display;
