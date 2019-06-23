import styled, { css } from 'styled-components/macro';

export const Container = styled.button`
  border: none;
  padding: 10px;
  min-width: 120px;
  height: 45px;
  transition: 250ms ease-in-out;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: #5075f9;
  }

  ${({ orange }) =>
    orange &&
    css`
      background-color: ${({ theme }) => theme.orange};

      &:hover {
        background-color: #f7ae67;
      }
    `}
`;
