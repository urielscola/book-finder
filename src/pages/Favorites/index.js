import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withFavorites } from '../../containers';
import Tabs from '../../components/Tabs';
import DisplayList from '../../components/DisplayList';
import Sidebar from '../../components/Sidebar';
import { PageContainer, Box } from '../../components/Grid';
import { TABS } from '../../constants/nav';

const Favorites = ({ favorites }) => {
  return (
    <PageContainer>
      <Sidebar />
      <Tabs items={TABS} />
      <Box>
        <DisplayList books={favorites} title="Seus favoritos" preventLoader={true}/>
      </Box>
    </PageContainer>
  );
};

export default compose(withFavorites)(Favorites);

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};
