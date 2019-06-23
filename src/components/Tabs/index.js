import React from 'react';
import PropTypes from 'prop-types';
import { MobileBreakpoint } from '../Responsive';
import { Container, TabItem } from './styles';

const Tabs = ({ items }) => {
  return (
    <MobileBreakpoint>
      <Container>
        {items.map(({ to, label, icon }) => (
          <TabItem key={label} to={to} activeClassName="active">
            {icon}
            {label}
          </TabItem>
        ))}
      </Container>
    </MobileBreakpoint>
  );
};

export default Tabs;

Tabs.propTypes = {
  items: PropTypes.array.isRequired
};
