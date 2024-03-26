import React from "react";
import * as S from "./styled";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitecher = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  const changeLanguageHandler = (lng) => {
    i18n.changeLanguage(lng);

    const locationArray = location.pathname.split("/");
    locationArray[1] = lng;

    navigate(locationArray.join("/"));
  };

  return (
    <S.Select value={lngKey} onChange={(e) => changeLanguageHandler(e.target.value)}>
      <S.Option value={"arm"}>{t("arm")}</S.Option>
      <S.Option value={"en"}>{t("eng")}</S.Option>
    </S.Select>
  );
};

export default LanguageSwitecher;
