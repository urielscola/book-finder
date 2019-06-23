import styled from 'styled-components/macro';

export const Container = styled.article`
  width: 47%;
  margin-bottom: 25px;
`;

export const BookPrewiewImage = styled.div`
  margin-bottom: 15px;
  box-shadow: 2px 0px 20px #ababab;
  img {
    width: 100%;
    min-height: 230px;
    object-fit: cover;
  }
`;

export const BookPrewiewTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.black};
`;

export const BookPrewiewInfo = styled.div``;
