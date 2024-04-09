import { useTranslation } from "react-i18next";
import * as S from "./styled"
import { useLocation, useNavigate } from "react-router";

const LanguageSwitecher = () => {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguageHandler = (leng) => {
    i18n.changeLanguage(leng);
    const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

    const locationArray = location.pathname.split("/");

    locationArray[1] = lng;

    navigate(locationArray.join("/"));
  };

  return (
    <S.Select onChange={(e) => changeLanguageHandler(e.target.value)}>
    <S.Option value={"arm"} selected={lngKey === "arm"}>
      {t("arm")}
    </S.Option>
    <S.Option value={"en"} selected={lngKey === "en"}>
      {t("eng")}
    </S.Option>
  </S.Select>
    )
};
export default LanguageSwitecher