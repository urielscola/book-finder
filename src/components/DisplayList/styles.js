import styled from 'styled-components/macro';

export const Container = styled.section`
  position: relative;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
