
import React, { useState } from 'react';
import * as S from "./styled"
import { IMAGES } from '../../assets/images';
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.BurgerIcon onClick={toggleMenu}>
         <S.burgerMenuIcon  src={IMAGES.BurgerMenuIcon}>
     
     </S.burgerMenuIcon>
           <S.BurgerMenuContainer onClick={toggleMenu}>
          </S.BurgerMenuContainer>   
    
    </S.BurgerIcon>
  );
};

export default BurgerMenu;

