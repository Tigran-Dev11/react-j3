import { useState } from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";
import { useTranslation } from "react-i18next";
import { routesHref } from "../../utils/constants";
import LanguageSwitcher from "../languag-switcher";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <S.MenuContainer onClick={openMenu}>
      <S.MenuIcon src={IMAGES.burgerMenuIcon}></S.MenuIcon>
      <S.BurgerMenuContainer isOpen={isOpen} onClick={openMenu}>
        <S.Spancontainer>
          <S.Span onClick={closeMenu}>&#215;</S.Span>
        </S.Spancontainer>
        <S.BurgerMenuLinkContainer>
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
          <LanguageSwitcher/>
        </S.BurgerMenuLinkContainer>
      </S.BurgerMenuContainer>
    </S.MenuContainer>
  );
};

export default BurgerMenu;
