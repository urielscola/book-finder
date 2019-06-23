import React from 'react';
import Tabs from '../../components/Tabs';
import Categories from '../../components/Categories';
import Display from '../../components/Display';
import { Box } from '../../components/Box';
import withBooks from '../../containers/withBooks';
import { TABS, CATEGORIES } from '../../constants/nav';

const Home = ({ list, ...props }) => {
  console.log(props);
  return (
    <div>
      <Tabs items={TABS} />
      <Box>
        <Categories items={CATEGORIES} />
        <Display books={list} />
      </Box>
    </div>
  );
};

export default withBooks(Home);
