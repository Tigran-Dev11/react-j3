import { useTranslation } from "react-i18next";
import { ROUTES } from "../../utils/constants";
import { products } from "./../../utils/product";
import * as S from "./styled";

const ProductCard = () => {
  const { t } = useTranslation();
  

  const handleProductClick = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = ROUTES.productSingle; // Navigate to the product single page
  };
  return (
    <>
      {products?.map((product) => (
       
          <S.ProductItem key={product.id} onClick={() => handleProductClick(product)}>
            <S.ProductImage src={product.img} alt="images" />
            <S.Paragraph>{product.description}</S.Paragraph>
          </S.ProductItem>
      ))}
    </>
  );
};

export default ProductCard;
