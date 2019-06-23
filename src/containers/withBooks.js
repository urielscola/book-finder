import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../store/ducks/books';

import { getList } from '../store/ducks/books/selectors';

const mapStateToProps = state => ({
  list: getList(state),
  loading: state.books.loading,
  error: state.books.error,
  detail: state.books.detail,
  page: state.books.page,
  step: state.books.step,
  lastItem: state.books.lastItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default function withBooks(Composed) {
  class withBooksComponent extends PureComponent {
    componentDidMount() {
      this.props.getBooks('O poder do hábito');
    }

    render() {
      return <Composed {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withBooksComponent);
}
