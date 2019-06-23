import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 10px 0;
`;

export const CategoriesBox = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryItem = styled(Link)`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.fontSecundary};
  border-radius: 6px;
  color: ${({ theme }) => theme.fontSecundary};
  margin-bottom: 10px;
  font-size: 17px;
  line-height: 1;
  text-align: center;
  width: 48%;
`;
