import React, { useState, useRef } from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";

import { useTranslation } from "react-i18next";
import { routesHref } from "../../utils/constants";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <S.BurgerIcon onClick={toggleMenu}>
      <S.burgerMenuIcon src={IMAGES.BurgerMenuIcon} />
      <S.BurgerMenuContainer isOpen={isOpen} ref={menuRef}>
        <S.CloseMenuButton onClick={closeMenu}>X</S.CloseMenuButton>
        <S.NavLinks to={`${lngKey}${routesHref.home}`}>
          {t("nav.home")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.aboutUs}`}>
          {t("nav.about")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.shop}`}>
          {t("nav.shop")}
        </S.NavLinks>
        <S.NavLinks to={`${lngKey}${routesHref.blog}`}>
          {t("nav.blog")}
        </S.NavLinks>
      </S.BurgerMenuContainer>
    </S.BurgerIcon>
  );
};

export default BurgerMenu;
