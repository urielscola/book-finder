import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BookItemAuthors, BookItemSaleInfo } from '../BookItem';
import {
  Container,
  BookPrewiewImage,
  BookPrewiewInfo,
  BookPrewiewTitle
} from './styles';
import { truncate } from '../../helpers/Strings';

const BookPreview = ({ book, setBookDetail }) => {
  return (
    <Container onClick={() => setBookDetail(book)}>
      <Link to={`/books/${book.id}`}>
        <BookPrewiewImage>
          <figure>
            <img src={book.image} alt={book.title} />
          </figure>
        </BookPrewiewImage>
        <BookPrewiewInfo>
          <BookPrewiewTitle>{truncate(book.title, 15)}</BookPrewiewTitle>
          <BookItemAuthors authors={book.authors} />
          <BookItemSaleInfo
            available={book.available}
            price={book.price}
            salePrice={book.salePrice}
          />
        </BookPrewiewInfo>
      </Link>
    </Container>
  );
};

export default BookPreview;

BookPreview.propTypes = {
  setBookDetail: PropTypes.func.isRequired,
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array
  }).isRequired
};
