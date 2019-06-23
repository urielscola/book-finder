import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import { Container, CategoriesBox, CategoryItem } from './styles';

const Categories = ({ items }) => {
  return (
    <Container>
      <SectionTitle title="Explorar categorias" />
      <CategoriesBox>
        {items.map(category => (
          <CategoryItem key={category} to={`/${category.toLowerCase()}`}>
            {category}
          </CategoryItem>
        ))}
      </CategoriesBox>
    </Container>
  );
};

export default Categories;

Categories.propTypes = {
  items: PropTypes.array.isRequired
};
