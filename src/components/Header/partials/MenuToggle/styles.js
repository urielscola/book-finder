import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  button {
    position: relative;
    border: 0;
    top: 5px;
    background: 0 0;
    width: 25px;
    height: 25px;
    display: block;
    padding: 0;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: #333;
      position: relative;
      transition: 250ms ease;

      &:first-child {
        bottom: 6px;
      }

      &:last-child {
        top: 6px;
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      button {
        span {
          width: 0;

          &:first-child {
            width: 100%;
            transform: rotate(-220deg) translateY(-10px);
            right: 9px;
          }
          &:last-child {
            width: 100%;
            transform: rotate(220deg) translateY(10px);
            right: 9px;
          }
        }
      }
    `};
`;
