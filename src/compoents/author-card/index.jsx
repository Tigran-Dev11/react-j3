/* eslint-disable react/prop-types */

import * as S from "./styled";

const AuthorCard = ({ item }) => {
  return (
    <>
      <S.AuthorCardContainer key={item.id}>
        <S.AuthorCardImg src={item.img} alt={item.name} />
        <S.AuthorCardName>{item.name}</S.AuthorCardName>
        <S.AuthorCardDescription>{item.content}</S.AuthorCardDescription>
        <S.SocialMediaLink>
          {item.socialMedia.map((iconSrc, index) => (
            <S.Icons key={index} src={iconSrc} alt="social media icon" />
          ))}
        </S.SocialMediaLink>
      </S.AuthorCardContainer>
    </>
  );
};

export default AuthorCard;