import React from 'react';
import * as  S from "./styled"
import { useTranslation } from 'react-i18next';
const ProductSingle = () => {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  const {t}= useTranslation()
  return (
    <S.SingleProductContainer>
      {selectedProduct && (
    <S.ProductItem>
          <S.ItemImg src={selectedProduct.img} alt="img" />
          <S.ItemDescription>{selectedProduct.description}</S.ItemDescription>
          </S.ProductItem>
      )}
    </S.SingleProductContainer>
  );
};

export default ProductSingle;
