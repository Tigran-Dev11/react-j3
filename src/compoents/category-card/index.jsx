/* eslint-disable react/prop-types */
import * as S from "./styled";

const CategoryCard = ({ item }) => {
  return (
    <>
    <S.CategoryCardContainer key={item.id}>
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
