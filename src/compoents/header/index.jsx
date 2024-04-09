import { useTranslation } from "react-i18next";
import * as S from "./styled";
import LanguageSwitecher from "../languag-switcher";
const Header = () => {
    const { t } = useTranslation();

  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  return (
    <S.NavBar>
      <S.Link to={`/${lngKey}`}>{t("nav.home")}</S.Link>

<LanguageSwitecher/>
    </S.NavBar>


  );
};

export default Header;
