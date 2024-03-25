import * as S from "./styled";

import LanguageSwitecher from "../LanguageSwitcher";
import { ROUTES } from "../../utils/constants";
import { IMAGES } from "./../../assets/images/index";
import {useTranslation } from 'react-i18next';
import BurgerMenu from "./burger-menu";



export const Header = () => {
const {t} = useTranslation()
  return (
    <S.Nav>
      <BurgerMenu/>
      <S.Title>
        <S.NavLinks to={ROUTES.home}>Skin Bliss.</S.NavLinks>
      </S.Title>
      <S.MenuContainer>
        <S.NavLinks to={ROUTES.home}>{t('nav.home')}</S.NavLinks>
        <S.NavLinks to={ROUTES.aboutUs}>{t('nav.about')}</S.NavLinks>
        <S.NavLinks to={ROUTES.shop}>{t('nav.shop')}</S.NavLinks>
        <S.NavLinks to={ROUTES.blog}>{t('nav.blog')}</S.NavLinks>
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
