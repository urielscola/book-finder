import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  width: 250px;
  padding: 20px;
`;

export const SidebarItem = styled(NavLink)`
  color: ${({ theme }) => theme.fontSecundary};
  margin-bottom: 12px;
  display: block;
  font-weight: 700;
  padding: 5px 0;
  position: relative;
  transition: 250ms ease-in-out;

  &.active {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      display: block;
      background-color: ${({ theme }) => theme.fontPrimary};
    }
    color: ${({ theme }) => theme.fontPrimary};
  }

  &:hover {
    transform: translateX(10px);
  }
`;
