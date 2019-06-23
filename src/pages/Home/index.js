import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withBooks, withFilters } from '../../containers';
import Tabs from '../../components/Tabs';
import DisplayList from '../../components/DisplayList';
import { Box } from '../../components/Box';
import { TABS } from '../../constants/nav';

const Home = ({
  list,
  searchTerm,
  loading,
  step,
  page,
  loadMoreBooks,
  lastItem
}) => {
  return (
    <div>
      <Tabs items={TABS} />
      <Box>
        <DisplayList
          title={searchTerm}
          loading={loading}
          books={list}
          loadMoreBooks={loadMoreBooks}
          step={step}
          lastItem={lastItem}
          page={page}
        />
      </Box>
    </div>
  );
};

export default compose(
  withFilters,
  withBooks
)(Home);

Home.propTypes = {
  list: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMoreBooks: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  lastItem: PropTypes.bool.isRequired
};
