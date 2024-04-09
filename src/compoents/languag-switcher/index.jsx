import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { useLocation, useNavigate } from "react-router";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);

    const locationArray = location.pathname.split("/");
    locationArray[1] = lang;

    navigate(locationArray.join("/"));
  };

  return (
    <S.Select onChange={(e) => changeLanguageHandler(e.target.value)}>
      <S.Option value={"arm"} selected={lngKey === "arm"}>
        {t("arm")}
      </S.Option>
      <S.Option value={"eng"} selected={lngKey === "en"}>
        {t("eng")}
      </S.Option>
    </S.Select>
  );
};

export default LanguageSwitcher;
