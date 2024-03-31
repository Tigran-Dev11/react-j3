import React from "react";
import * as S from "./styled";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";


const Header = () => {
  return (
    <S.Nav>

      <div>
      <NavLink to={ROUTES.home}></NavLink>
      <NavLink to={ROUTES.home}></NavLink>
   

      <NavLink to={ROUTES.home}></NavLink>
      <NavLink to={ROUTES.home}></NavLink>
   

        <NavLink to={ROUTES.home}>Home</NavLink>
        <NavLink to={ROUTES.shop}>Shop</NavLink>
        <NavLink to={ROUTES.login}>Login</NavLink>
        <NavLink to={ROUTES.contactUs}>Contact Us</NavLink>
      </div>
    </S.Nav>
  );
};

export default Header;