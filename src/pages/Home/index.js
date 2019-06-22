import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as BooksActions } from '../../store/ducks/books';

const Home = ({ getBooks, books }) => {
  useEffect(() => {
    getBooks({ q: 'teste ' });
  }, [getBooks]);

  console.log(books);
  return <div>Home</div>;
};

const mapStateToProps = state => ({
  books: state.books.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};
