import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoritesActions } from '../store/ducks/favorites';

const mapStateToProps = state => ({
  favorites: state.favorites.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default function withFavorites(Composed) {
  class withFavoritesComponent extends PureComponent {
    componentDidMount() {
      this.props.getFavorites();
    }

    render() {
      return <Composed {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withFavoritesComponent);
}
