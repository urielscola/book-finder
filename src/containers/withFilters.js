import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FiltersActions } from '../store/ducks/filters';

const mapStateToProps = state => ({
  searchTerm: state.filters.searchTerm,
  activeCategory: state.filters.activeCategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FiltersActions, dispatch);

export default function withFilters(Composed) {
  class withFiltersComponent extends PureComponent {
    componentDidMount() {
      if (!this.props.searchTerm) this.props.setSearchTerm('reactjs');
    }

    render() {
      return <Composed {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withFiltersComponent);
}
