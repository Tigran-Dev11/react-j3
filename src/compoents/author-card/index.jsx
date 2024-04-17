/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { routesHref } from "/src/utils/constants";


const AuthorCard = ({ item }) => {
  const navigate = useNavigate();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  const toAuthorSinglePage = (item) => {
    localStorage.setItem("author", JSON.stringify(item));
    navigate(`/${lngKey}${routesHref.authorSingle}`);
  };
  return (
    <>
      <S.AuthorCardContainer
        key={item.id}
        onClick={() => toAuthorSinglePage(item)}
      >
        <S.AuthorCardImg src={item.img} alt={item.name} />
        <S.AuthorCardName>{item.name}</S.AuthorCardName>
        <S.AuthorCardDescription>{item.content}</S.AuthorCardDescription>
        <S.SocialMediaLink>
          {item.socialMedia.map((iconSrc, index) => (
            <S.Icons key={index} src={iconSrc} alt="social-media-icon" />
          ))}
        </S.SocialMediaLink>
      </S.AuthorCardContainer>
    </>
  );
};

export default AuthorCard;
