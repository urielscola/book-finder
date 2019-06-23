import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.fontSecundary};
`;

export const Price = styled.span`
  ${({ isOnSale }) =>
    isOnSale &&
    css`
      text-decoration: line-through;
      margin-right: 7px;
    `}
`;

export const Unavailable = styled.span`
  color: ${({ theme }) => theme.red};
`;
