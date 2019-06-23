import styled, { keyframes } from 'styled-components/macro';

const load = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: block;
  margin: 40px auto;

  div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.orange};
    opacity: 1;
    border-radius: 50%;
    animation: ${load} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
