import * as S from "./styled";
import { ROUTES } from "../../utils/constants";
import { IMAGES } from "../../assets/images";
import BurgerMenu from "../burger-menu";

export const Header = () => {
  return (
    <S.Nav>
      <BurgerMenu/>
      <S.pagesContainer>
        <S.Link to={ROUTES.shop}>Shop</S.Link>
        <S.Link to={ROUTES.aboutUs}>About Us</S.Link>
        <S.Link to={ROUTES.jurnal}>Jurnal</S.Link>
        <S.Link to={ROUTES.stores}>Stores</S.Link>
      </S.pagesContainer>
      <S.Link to={ROUTES.home}>
        <img src={IMAGES.logo} alt="logo"></img>
      </S.Link>
      <S.accountsContainer>
        <S.image src={IMAGES.search} alt="search" ></S.image>
        <S.image src={IMAGES.like} alt="like" ></S.image>
      
        <S.Link to={ROUTES.account}>
          <S.image src={IMAGES.user} alt="user"></S.image>
        </S.Link>
      </S.accountsContainer>
    </S.Nav>
  );
};
