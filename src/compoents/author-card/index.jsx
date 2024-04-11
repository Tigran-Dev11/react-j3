import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { authors } from "../../pages/home/author";

const AuthorCard = () => {
  const { t } = useTranslation();
  return (
    <>
      {authors(t).map(({ id, name, img, content, socialMedia }) => {
        return (
          <S.AuthorCardContainer key={id}>
            <S.AuthorCardImg src={img} alt={name} />
            <S.AuthorCardName>{name}</S.AuthorCardName>
            <S.AuthorCardDescription>{content}</S.AuthorCardDescription>
            <S.SocialMediaLink>
              {socialMedia?.map((icon, index) => {
                return (
                  <S.IconsContainer key={index}>
                    <S.Icons src={icon} alt={name}></S.Icons>
                  </S.IconsContainer>
                );
              })}
            </S.SocialMediaLink>
          </S.AuthorCardContainer>
        );
      })}
    </>
  );
};

export default AuthorCard;
