import React from 'react';
import Tabs from '../../components/Tabs';
import DisplayList from '../../components/DisplayList';
import Sidebar from '../../components/Sidebar';
import { PageContainer, Box } from '../../components/Grid';
import { TABS } from '../../constants/nav';

const Home = () => {
  return (
    <PageContainer>
      <Sidebar />
      <Tabs items={TABS} />
      <Box>
        <DisplayList />
      </Box>
    </PageContainer>
  );
};

export default Home;
