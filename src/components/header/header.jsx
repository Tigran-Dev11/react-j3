import React from "react";
import * as S from "./styled";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";


const Header = () => {
  return (
    <S.Nav>
<<<<<<< HEAD

      <div>
      <NavLink to={ROUTES.home}></NavLink>
      <NavLink to={ROUTES.home}></NavLink>
   

      <NavLink to={ROUTES.home}></NavLink>
      <NavLink to={ROUTES.home}></NavLink>
   

=======
      <NavLink to={ROUTES.home}></NavLink>
      <NavLink to={ROUTES.home}></NavLink>
      <S.MenuContainer>
>>>>>>> 20bfa4fd787662ac6c513a655ae86115261d592d
        <NavLink to={ROUTES.home}>Home</NavLink>
        <NavLink to={ROUTES.shop}>Shop</NavLink>
        <NavLink to={ROUTES.login}>Login</NavLink>
        <NavLink to={ROUTES.registr}>Registr</NavLink>
        <NavLink to={ROUTES.contactUs}>Contact Us</NavLink>
      </S.MenuContainer>
    </S.Nav>
  );
};

export default Header;