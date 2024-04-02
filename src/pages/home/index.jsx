import * as S from "./styled.js";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (leng) => {
    i18n.changeLanguage(leng);
  };

  return (
    <S.HomeContainer>
      <p>{t("title")}</p>

      <button onClick={() => changeLanguage("arm")}>arm</button>
      <button onClick={() => changeLanguage("en")}>eng</button>
    </S.HomeContainer>
  );
};

export default Home;