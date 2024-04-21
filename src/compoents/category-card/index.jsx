/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { routesHref } from "/src/utils/constants";
const CategoryCard = ({ item }) => {

  const navigate = useNavigate();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  const toCategorySInglePage = (item) => {
    localStorage.setItem("category", JSON.stringify(item));
    navigate(`/${lngKey}${routesHref.categorySingle}`);
  };
  
  return (
    <>
      <S.CategoryCardContainer
        key={item.id}
        onClick={() => toCategorySInglePage(item)}
      >
        <S.CategoryCardImg src={item.img} alt={item.title} />
        <S.CategoryCardContent>
          <S.CategoryCardTitle>{item.title}</S.CategoryCardTitle>
          <S.CategoryCardDescription>
            {item.description}
          </S.CategoryCardDescription>
        </S.CategoryCardContent>
      </S.CategoryCardContainer>
    </>
  );
};

export default CategoryCard;
