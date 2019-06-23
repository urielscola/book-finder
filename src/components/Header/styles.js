import styled from 'styled-components/macro';

export const Container = styled.header`
  padding: 15px 0;

  @media (min-width: 992px) {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 1px 2px #ccc;
  }
`;

export const Logo = styled.h1`
  margin-bottom: 15px;
  img {
    width: 200px;
    display: block;
    margin: auto;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;
