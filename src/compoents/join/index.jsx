import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { routesHref } from "/src/utils/constants";
import Button from '/src/common/button/index';


const Join = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  return (
    <S.JoinContainer>
      <S.JoinTitle>{t("home.join.title")}</S.JoinTitle>
      <S.JoinDescription>{t("home.join.description")}</S.JoinDescription>
      <S.Link to={`/${lngKey}${routesHref.registr}`}>
        {" "}
        <Button variant="primary" title={t("btn.joinNow")} />
      </S.Link>
    </S.JoinContainer>
  );
};

export default Join;
