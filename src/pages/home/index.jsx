import { useTranslation } from "react-i18next";
import * as S from "./styled";
const Home = () => {
  const {t} = useTranslation()
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Title>{t("homeTitle.Welcome")}</S.Title>
      </S.HomeHeader>
    </S.HomeContainer>
  );
};
export default Home;
