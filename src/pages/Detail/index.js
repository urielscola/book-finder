import React from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { withBooks } from '../../containers';
import Tabs from '../../components/Tabs';
import Sidebar from '../../components/Sidebar';
import BookDetail from '../../components/BookDetail';
import { PageContainer, Box } from '../../components/Grid';
import { TABS } from '../../constants/nav';

const Detail = props => {
  return (
    <PageContainer>
      <Sidebar />
      <Tabs items={TABS} />
      <Box>
        <BookDetail bookId={props.match.params.bookId} />
      </Box>
    </PageContainer>
  );
};

export default compose(withBooks)(Detail);

Detail.propTypes = {};
