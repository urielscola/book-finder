import React from 'react';
import PropTypes from 'prop-types';
import BookPreviewAuthors from './partials/BookPreviewAuthors';
import BookPreviewSaleInfo from './partials/BookPreviewSaleInfo';
import {
  Container,
  BookPrewiewImage,
  BookPrewiewInfo,
  BookPrewiewTitle
} from './styles';
import { truncate } from '../../helpers/Strings';

const BookPreview = ({ book }) => {
  return (
    <Container>
      <BookPrewiewImage>
        <figure>
          <img src={book.image} alt={book.title} />
        </figure>
      </BookPrewiewImage>
      <BookPrewiewInfo>
        <BookPrewiewTitle>{truncate(book.title, 15)}</BookPrewiewTitle>
        <BookPreviewAuthors authors={book.authors} />
        <BookPreviewSaleInfo
          available={book.available}
          price={book.price}
          salePrice={book.salePrice}
        />
      </BookPrewiewInfo>
    </Container>
  );
};

export default BookPreview;

BookPreview.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array
  }).isRequired
};
