import { useState } from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";
import { useTranslation } from "react-i18next";
import { routesHref } from "../../utils/constants";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.MenuContainer >
      <S.MenuIcon src={IMAGES.burgerMenuIcon} alt="burger-icon" onClick={openMenu}></S.MenuIcon>
      <S.BurgerMenuContainer isOpen={isOpen} onClick={openMenu}>
        <S.BurgerMenuLinkContainer isOpen={isOpen}>
          <S.BurgerMenuLink to={`/${lngKey}${routesHref.home}`}>
            {t("nav.home")}
          </S.BurgerMenuLink>
          <S.BurgerMenuLink to={`/${lngKey}${routesHref.blog}`}>
            {t("nav.blog")}
          </S.BurgerMenuLink>
          <S.BurgerMenuLink to={`/${lngKey}${routesHref.aboutUs}`}>
            {t("nav.aboutUs")}
          </S.BurgerMenuLink>
          <S.BurgerMenuLink to={`/${lngKey}${routesHref.contactUs}`}>
            {t("nav.contactUs")}
          </S.BurgerMenuLink>
          <S.BurgerMenuLink to={`/${lngKey}${routesHref.registr}`}>
            {t("btn.subscribe")}
          </S.BurgerMenuLink>
        </S.BurgerMenuLinkContainer>
      </S.BurgerMenuContainer>
    </S.MenuContainer>
  );
};
export default BurgerMenu;
