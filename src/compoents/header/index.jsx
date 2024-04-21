import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { routesHref } from "/src/utils/constants";
import LanguageSwitcher from "../languag-switcher";
import BurgerMenu from './burger-menu';
import Button from "/src/common/button";
import useLogout from "../../hooks/use-logOut";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const isLogin = sessionStorage.getItem("isLogin");
  const handleLogout = useLogout();

  const buttonTitle = !isLogin ? t("btn.subscribe") : t("btn.logOut");
  const buttonAction = isLogin ? handleLogout : () => {
    navigate(`/${lngKey}${routesHref.registr}`);
  };
  
  return (
    <S.NavBar>
      <S.Title>
        <S.Link to={`/${lngKey}${routesHref.home}`}> &#123;Finsweet</S.Link>
      </S.Title>
      <S.LinkContainer>
        <S.Link to={`/${lngKey}${routesHref.home}`}>{t("nav.home")}</S.Link>
        <S.Link to={`/${lngKey}${routesHref.blog}`}>{t("nav.blog")}</S.Link>
        <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
          {t("nav.aboutUs")}
        </S.Link>
        <S.Link to={`/${lngKey}${routesHref.contactUs}`}>
          {t("nav.contactUs")}
        </S.Link>
      </S.LinkContainer>
      <S.BtnSwitcherContainer>
          <Button variant="secondary" title={buttonTitle} onClick={buttonAction} />
        <LanguageSwitcher />
      </S.BtnSwitcherContainer>
     <BurgerMenu/>
    </S.NavBar>
  );
};

export default Header;
