import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader';
import SectionTitle from '../SectionTitle';
import BookPreview from '../BookPreview';
import { Container, ListContainer } from './styles';

const DisplayList = ({
  title,
  loading,
  loadMoreBooks,
  books,
  step,
  page,
  lastItem
}) => {
  if (loading) return <Loader />;

  const handleLoadMore = () => loadMoreBooks({ title, step, page });

  return (
    <Container>
      {books.length > 0 ? (
        <>
          <SectionTitle title={`Resultados para ${title}`} />
          <InfiniteScroll
            hasMore
            dataLength={books.length}
            next={!lastItem ? handleLoadMore : undefined}
            loader={lastItem ? null : <Loader />}
          >
            <ListContainer>
              {books.map(book => (
                <BookPreview key={book.id} book={book} />
              ))}
            </ListContainer>
            {lastItem && <p>Fim da busca</p>}
          </InfiniteScroll>
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
  title: PropTypes.string.isRequired,
  loadMoreBooks: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  lastItem: PropTypes.bool.isRequired
};
