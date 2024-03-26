import * as S from "./styled";

import LanguageSwitecher from "../LanguageSwitcher";
import { ROUTES, routesHref } from "../../utils/constants";
import { IMAGES } from "./../../assets/images/index";
import { useTranslation } from "react-i18next";
import BurgerMenu from "./burger-menu";

export const Header = () => {
  const { t } = useTranslation();

  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  return (
    <S.Nav>
      <BurgerMenu />
      <S.Title>
        <S.NavLinks to={`/${lngKey}`}>Skin Bliss.</S.NavLinks>
      </S.Title>
      <S.MenuContainer>
        <S.NavLinks to={`${lngKey}${routesHref.home}`}>
          {t("nav.home")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.aboutUs}`}>
          {t("nav.about")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.shop}`}>
          {" "}
          {t("nav.shop")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.blog}`}>
          {" "}
          {t("nav.blog")}
        </S.NavLinks>
      </S.MenuContainer>
      <S.BasketLangContainer>
        <S.basketCountLine>
          <S.BasketIcon src={IMAGES.basketIcon}></S.BasketIcon>
          <S.BasketCount></S.BasketCount>
        </S.basketCountLine>

        <LanguageSwitecher />
      </S.BasketLangContainer>
    </S.Nav>
  );
};
