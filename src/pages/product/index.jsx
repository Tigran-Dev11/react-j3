import React from "react";
import * as S from "./styled";
import Button from "../../common/button";
import { COLORS } from "../../assets/style/color";
import ProductCard from "../../components/product-card";
import { useTranslation } from "react-i18next";


const Product = () => {
  const {t}= useTranslation()
  return (
    <S.ProductContainer>
      <S.ProductTitle>{t("product.title")}</S.ProductTitle>
      <S.ProductCategory>
        <Button border={COLORS.blueViolet} color={COLORS.black}>
        {t("product.serum")}
        </Button>
        <Button border={COLORS.blueViolet} color={COLORS.black}>
         {t("product.mousturizer")}
        </Button>
        <Button border={COLORS.blueViolet} color={COLORS.black}>
          {t("product.lipbalm")}
        </Button>
        <Button border={COLORS.blueViolet} color={COLORS.black}>
         { t("product.faceWash")}
        </Button>
        <Button border={COLORS.blueViolet} color={COLORS.black}>
          {t("product.faceMask")}
        </Button>
      </S.ProductCategory>

      <S.AboutProduct>
        <ProductCard/>
      </S.AboutProduct>
    </S.ProductContainer>
  );
};

export default Product;
