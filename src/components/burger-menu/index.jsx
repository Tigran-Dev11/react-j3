import React,{ useState } from "react";
import * as S from './styled'

import { ROUTES } from "../../utils/constants";
import { IMAGES } from "../../assets/images";



const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <S.MenuWrapper >
        <S.BurgerIcon  src={IMAGES.burgerIcon} alt="burgerIcon"  onClick={handleToggleMenu}>
        </S.BurgerIcon >
        <S.MenuItems  isOpen={isOpen}>
          <S.MenuItem  to={ROUTES.home}>Home</S.MenuItem>
          <S.MenuItem to={ROUTES.aboutUs}>About</S.MenuItem>
          <S.MenuItem to={ROUTES.jurnal}>Jurnal</S.MenuItem>
        </S.MenuItems>
      </S.MenuWrapper>
    );
  };
export default BurgerMenu