import styled, { css } from 'styled-components/macro';

export const Container = styled.aside`
  position: absolute;
  transition: 250ms ease-in-out;
  top: 133px;
  left: 0;
  z-index: 2;
  width: 250px;
  height: 100%;
  background: #f9f9f9;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  transform: translateX(-100%);

  ul {
    padding: 25px;
    li {
      padding: 12px 0;

      color: ${({ theme }) => theme.fontSecundary};
      a {
        width: 100%;
        display: block;
        color: ${({ theme }) => theme.fontSecundary};

        &.active {
          text-decoration: underline;
        }
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `};
`;

export const Offset = styled.div`
  cursor: pointer;
  transition: 250ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  top: 133px;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;
