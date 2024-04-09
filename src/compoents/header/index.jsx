import { useTranslation } from "react-i18next";
import * as S from "./styled";
const Header = () => {
    const { t } = useTranslation();

  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";

  return (
    <S.NavBar>
      <S.Link to={`/${lngKey}`}>Home</S.Link>
    
    </S.NavBar>
  );
};

export default Header;
