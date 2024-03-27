import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { productsData } from "../../pages/home/data";
import { useNavigate } from "react-router";

const ProductCard = () => {
  const { t } = useTranslation();
  
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
   
  };
  return (
    <>
      {productsData(t)?.map((product) => (
        <S.ProductItem
          key={product.id}
          onClick={() => handleProductClick(product)}
        >
          <S.ProductImage src={product.img} alt="images" />
          <S.Paragraph>{product.description}</S.Paragraph>
        </S.ProductItem>
      ))}
    </>
  );
};

export default ProductCard;
