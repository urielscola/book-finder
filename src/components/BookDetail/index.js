import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Loader from '../Loader';
import { withBooks } from '../../containers';
import SectionTitle from '../SectionTitle';
import { BookItemAuthors, BookItemSaleInfo } from '../BookItem';
import ButtonLink from '../ButtonLink';
import { HeartIcon } from '../Icons';
import {
  Container,
  BookDetailImage,
  BookDetails,
  BookDescription,
  AddToFavorites
} from './styles';

const BookDetail = ({ detail, getBookDetail, bookId, loading }) => {
  useEffect(() => {
    if (!detail) getBookDetail(bookId);
  }, [detail, bookId, getBookDetail]);

  if (loading || !detail) return <Loader />;
  return (
    <Container>
      <BookDetailImage>
        <figure>
          <img src={detail.image} alt={detail.title} />
        </figure>
      </BookDetailImage>
      <BookDetails>
        <h1>{detail.title}</h1>
        <BookItemAuthors authors={detail.authors} />
        {detail.publisher && <h3>{detail.publisher}</h3>}
        <BookItemSaleInfo
          available={detail.available}
          price={detail.price}
          salePrice={detail.salePrice}
        />
        <AddToFavorites>
          <HeartIcon size={20} />
          <p>Adicionar aos favoritos</p>
        </AddToFavorites>
        {detail.available && (
          <ButtonLink to={detail.link} label="COMPRAR" external />
        )}
      </BookDetails>
      {detail.description && (
        <BookDescription>
          <SectionTitle title="Descrição" />
          <p>{detail.description}</p>
        </BookDescription>
      )}
    </Container>
  );
};

export default compose(withBooks)(BookDetail);

BookDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  getBookDetail: PropTypes.func.isRequired,
  bookId: PropTypes.string.isRequired,
  detail: PropTypes.object
};

BookDetail.defaultProps = {
  detail: null
};
