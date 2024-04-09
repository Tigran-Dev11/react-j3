import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Button from "../../common/button";
import Input from "../../common/input";
const Home = () => {
  const {t} = useTranslation()
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Title>{t("homeTitle.welcome")}</S.Title>
        
      <Button title={"hello"} variant= "primary"/>
      <Button title={"bye"} variant= "secondary"/>
<Input placeholder={"enter"} variant="primary"/>
      </S.HomeHeader>
      <Input placeholder={"hello"} variant= "secondary"/>
    </S.HomeContainer>
    
  );
};
export default Home;
