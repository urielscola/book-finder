import styled from 'styled-components/macro';

export const Container = styled.article`
  width: 47%;
  margin-bottom: 25px;
  cursor: pointer;

  @media (min-width: 767px) {
    width: 23%;
  }

  @media (min-width: 992px) {
    width: 15%;
  }
`;

export const BookPrewiewImage = styled.div`
  margin-bottom: 15px;
  box-shadow: 2px 0px 20px #ababab;
  img {
    width: 100%;
    min-height: 230px;
    object-fit: cover;
  }

  @media (min-width: 767px) {
    img {
      min-height: 250px;
    }
  }

  @media (min-width: 992px) {
    img {
      min-height: 250px;
    }
  }
`;

export const BookPrewiewTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.black};
`;

export const BookPrewiewInfo = styled.div``;
