import Join from "/src/compoents/join";
import SilderAuthors from "/src/compoents/slider/authors-slider";
import * as S from "./styled";
const CategorySingle = () => {
  const selectedCategory = JSON.parse(localStorage.getItem("category"));

  return (
    <S.CategoryContainer>
      {selectedCategory && (
        <S.CategoryCardContent>
          <S.CategoryImg
            src={selectedCategory.img}
            alt={selectedCategory.title}
          />
          <S.CategoryTitle>{selectedCategory.title}</S.CategoryTitle>
          <S.CategoryCardDescription>
            {selectedCategory.description}
          </S.CategoryCardDescription>
        </S.CategoryCardContent>
      )}
      <SilderAuthors />
      <Join />
    </S.CategoryContainer>
  );
};

export default CategorySingle;
