import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import SectionTitle from '../SectionTitle';
import BookPreview from '../BookPreview';
import { Container, ListContainer } from './styles';

const DisplayList = ({ title, loading, books }) => {
  if (loading) return <Loader />;

  return (
    <Container>
      {books.length > 0 ? (
        <>
          <SectionTitle title={`Resultados para ${title}`} />
          <ListContainer>
            {books.map(book => (
              <BookPreview key={book.id} book={book} />
            ))}
          </ListContainer>
        </>
      ) : (
        <SectionTitle title={`Nenhum resultado para ${title}`} />
      )}
    </Container>
  );
};

export default DisplayList;

DisplayList.propTypes = {
  loading: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
