import React from 'react';
import PropTypes from 'prop-types';
import { Container, Price, Unavailable } from './styles';
import { toCurrency } from '../../../../helpers/Strings';

const BookPreviewSalesInfo = ({ price, salePrice, available }) => {
  return (
    <Container>
      {available ? (
        <>
          {price && salePrice && price !== salePrice ? (
            <div>
              <Price isOnSale>{toCurrency(price)}</Price>
              <Price>{toCurrency(salePrice)}</Price>
            </div>
          ) : (
            <Price>{toCurrency(price)}</Price>
          )}
        </>
      ) : (
        <Unavailable>Indisponível</Unavailable>
      )}
    </Container>
  );
};

export default BookPreviewSalesInfo;

BookPreviewSalesInfo.propTypes = {
  price: PropTypes.number,
  salePrice: PropTypes.number,
  available: PropTypes.bool.isRequired
};
