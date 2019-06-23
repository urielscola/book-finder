import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 45px;
  width: calc(100% - 25px);
  padding: 0 20px;
  border-radius: 8px;
  border: none;
  display: block;
  color: ${({ theme }) => theme.fontSecundary};
  box-shadow: 0px 0px 3px ${({ theme }) => theme.fontSecundary};
  margin: auto;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
    text-align: center;
  }

  :-moz-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
    text-align: center;
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
    text-align: center;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
    text-align: center;
  }
`;
