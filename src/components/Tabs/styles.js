import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.fontSecundary};
`;

export const TabItem = styled(NavLink)`
  flex-grow: 1;
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.fontSecundary};

  svg {
    margin-right: 5px;
  }

  &.active {
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }
`;
