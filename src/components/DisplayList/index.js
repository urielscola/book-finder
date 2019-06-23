import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader';
import SectionTitle from '../SectionTitle';
import BookPreview from '../BookPreview';
import { withBooks, withFilters } from '../../containers';
import { Container, ListContainer } from './styles';

const DisplayList = ({
  searchTerm,
  loading,
  loadMoreBooks,
  list,
  step,
  page,
  lastItem,
  setBookDetail
}) => {
  if (loading) return <Loader />;
  const handleLoadMore = () => loadMoreBooks({ searchTerm, step, page });

  return (
    <Container>
      {list.length > 0 ? (
        <>
          <SectionTitle title={`Resultados para ${searchTerm}`} />
          <InfiniteScroll
            hasMore
            dataLength={list.length}
            next={!lastItem ? handleLoadMore : undefined}
            loader={lastItem ? null : <Loader />}
          >
            <ListContainer>
              {list.map(book => (
                <BookPreview
                  key={book.id}
                  book={book}
                  setBookDetail={setBookDetail}
                />
              ))}
            </ListContainer>
            {lastItem && <p>Fim da busca</p>}
          </InfiniteScroll>
        </>
      ) : (
        <SectionTitle title={`Nenhum resultado para ${searchTerm}`} />
      )}
    </Container>
  );
};

export default compose(
  withBooks,
  withFilters
)(DisplayList);

DisplayList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  loadMoreBooks: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  lastItem: PropTypes.bool.isRequired,
  setBookDetail: PropTypes.func.isRequired
};
