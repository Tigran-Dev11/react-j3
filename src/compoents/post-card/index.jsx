/* eslint-disable react/prop-types */
import * as S from "./styled";

const PostCard = ({ item }) => {
  return (
    <S.PostCardContainer key={item.id}>
      <S.PostAuthor>{item.date}</S.PostAuthor>
      <S.PostInformation>{item.description}</S.PostInformation>
    </S.PostCardContainer>
  );
};

export default PostCard;
