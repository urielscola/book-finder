import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 700px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-end;

    > button {
      margin-right: 10px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.blue};
  border: none;
  height: 45px;
  width: 47px;
  border-radius: 0px 8px 8px 0px;
  padding: 0;
  color: ${({ theme }) => theme.white};
`;

export const Input = styled.input`
  height: 45px;
  width: calc(100% - 75px);
  padding: 0 20px;
  border-radius: 8px 0 0 8px;
  border: none;
  display: block;
  color: ${({ theme }) => theme.fontSecundary};
  border: 1px solid #c1c1c1;
  line-height: 45px;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
  }

  :-moz-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.fontSecundary};
  }
`;
