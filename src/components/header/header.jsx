import React from "react";
import * as S from "./styled";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
<<<<<<< HEAD
import Login from "../../pages/login";
=======

>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
const Header = () => {
  
  return (
    <S.Nav>
      <NavLink to={ROUTES.home}></NavLink>
<<<<<<< HEAD
      <div >
=======
      <div>
>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
        <NavLink to={ROUTES.home}>Home</NavLink>
        <NavLink to={ROUTES.shop}>Shop</NavLink>
        <NavLink to={ROUTES.login}>Login</NavLink>
        <NavLink to={ROUTES.contactUs}>Contact Us</NavLink>
      </div>
    </S.Nav>
  );
};
export default Header;
<<<<<<< HEAD





=======
>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
