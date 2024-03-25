import React, { useState, useRef, useEffect } from 'react';
import * as S from './styled';
import { IMAGES } from '../../assets/images';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.BurgerIcon onClick={toggleMenu}>
      <S.burgerMenuIcon src={IMAGES.BurgerMenuIcon} />
      <S.BurgerMenuContainer isOpen={isOpen} ref={menuRef}>
      <S.CloseMenuButton onClick={closeMenu}>X</S.CloseMenuButton>
        <S.NavLinks to={ROUTES.home}>Home</S.NavLinks>
        <S.NavLinks to={ROUTES.aboutUs}>About</S.NavLinks>
        <S.NavLinks to={ROUTES.shop}>Shop</S.NavLinks>
        <S.NavLinks to={ROUTES.blog}>Blog</S.NavLinks>
      </S.BurgerMenuContainer>
    </S.BurgerIcon>
  );
};

export default BurgerMenu;


