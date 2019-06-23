import React, { useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withBooks, withFilters } from '../../containers';
import Tabs from '../../components/Tabs';
import DisplayList from '../../components/DisplayList';
import Sidebar from '../../components/Sidebar';
import { PageContainer, Box } from '../../components/Grid';
import { TABS } from '../../constants/nav';

const Category = ({
  list,
  searchTerm,
  loading,
  step,
  page,
  loadMoreBooks,
  lastItem,
  setSearchTerm,
  ...props
}) => {
  useEffect(() => {
    const { categoryId } = props.match.params;
    setSearchTerm(categoryId);
  }, [props.match.params, setSearchTerm]);

  return (
    <PageContainer>
      <Sidebar />
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
    </PageContainer>
  );
};

export default compose(
  withFilters,
  withBooks
)(Category);

Category.propTypes = {
  list: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMoreBooks: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  lastItem: PropTypes.bool.isRequired,
  setSearchTerm: PropTypes.func.isRequired
};
