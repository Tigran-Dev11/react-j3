import { useTranslation } from "react-i18next";
import * as S from "./styled";
import LanguageSwitcher from "../languag-switcher";
import { routesHref } from "../../utils/constants";
import Button from "../../common/button";

import BurgerMenu from "./burger-menu";

const Header = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

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
        <S.Link to={`/${lngKey}${routesHref.registr}`} >
          <Button variant="secondary" title={t("btn.subscribe")} />
        </S.Link>
        <LanguageSwitcher />
      </S.BtnSwitcherContainer>

      <BurgerMenu />
    </S.NavBar>
  );
};

export default Header;
