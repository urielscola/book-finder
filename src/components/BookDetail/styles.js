import styled from 'styled-components/macro';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BookDetailImage = styled.div`
  width: 40%;

  img {
    width: 100%;
  }

  @media (min-width: 767px) {
    width: 25%;

    img {
      min-height: 200px;
      object-fit: cover;
    }
  }
`;

export const BookDetails = styled.div`
  width: 55%;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.fontSecundary};
  }
`;

export const BookDescription = styled.div`
  padding: 15px 0;
  p {
    line-height: 1.5;
    font-size: 14px;
  }
`;

export const AddToFavorites = styled.div`
  margin: 10px 0;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  text-decoration: underline;
  align-items: center;
  transition: 250ms-ease-in-out;
  color: ${({ theme }) => theme.fontSecundary};

  &:hover {
    color: ${({ theme }) => theme.fontSecundary};
  }
  svg {
    margin-right: 5px;
    color: ${({ theme }) => theme.red};
  }
`;
