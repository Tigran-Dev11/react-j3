import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Button from "../../common/button";

const Home = () => {
  const { t } = useTranslation();
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.HomeHeaderContainer>
          <S.Title>{t("home.title")}</S.Title>
          <S.SubTitle>{t("home.subTitle")}</S.SubTitle>
          <S.AuthorInfo>{t("home.authorInfo")}</S.AuthorInfo>
          <S.Information>{t("home.information")}</S.Information>
          <Button title={t("btn.readMore")} variant="primary" />
        </S.HomeHeaderContainer>
      </S.HomeHeader>
    </S.HomeContainer>
  );
};
export default Home;
