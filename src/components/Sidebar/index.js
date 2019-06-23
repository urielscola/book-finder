import React from 'react';
import { DesktopBreakpoint } from '../Responsive';
import { Container, SidebarItem } from './styles';

import { CATEGORIES } from '../../constants/nav';

const Sidebar = () => (
  <DesktopBreakpoint>
    <Container>
      <nav>
        <ul>
          {CATEGORIES.map(category => (
            <li key={category}>
              <SidebarItem to={`/category/${category.toLowerCase()}`}>
                {category}
              </SidebarItem>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </DesktopBreakpoint>
);

export default Sidebar;
