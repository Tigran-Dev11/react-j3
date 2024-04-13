import { useTranslation } from "react-i18next";
import Button from "../../common/button";
import * as S from "./styled";

const Join = () => {
  const { t } = useTranslation();
  return (
    <S.JoinContainer>
      <S.JoinTitle>{t("home.join.title")}</S.JoinTitle>
      <S.JoinDescription>{t("home.join.description")}</S.JoinDescription>
      <Button variant="primary" title={t("btn.joinNow")} />
    </S.JoinContainer>
  );
};

export default Join;
