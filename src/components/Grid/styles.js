import styled from 'styled-components/macro';

export const Box = styled.div`
  padding: 30px 20px;

  @media (min-width: 992px) {
    padding: 20px;
    width: calc(100% - 250px);
  }
`;

export const PageContainer = styled.main`
  @media (min-width: 992px) {
    padding: 25px 0;
    display: flex;
    align-items: stretch;
  }
`;
