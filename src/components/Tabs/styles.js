import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #cccccc;
`;

export const TabItem = styled(NavLink)`
  flex-grow: 1;
  width: 50%;
  cursor: pointer;
  text-align: center;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.lightBlue};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }

  &.active {
    font-weight: 700;
    background-color: ${({ theme }) => theme.orange};
    border-bottom: 4px solid #de8938;
  }
`;
