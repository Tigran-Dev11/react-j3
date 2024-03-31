import React from "react";
import * as S from "./styled";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";


<<<<<<< HEAD



=======
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
const Header = () => {
  
  return (
    <S.Nav>
<<<<<<< HEAD
      <div>
      <NavLink to={ROUTES.home}></NavLink>

      

=======
      <NavLink to={ROUTES.home}></NavLink>
      <div>
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
        <NavLink to={ROUTES.home}>Home</NavLink>
        <NavLink to={ROUTES.shop}>Shop</NavLink>
        <NavLink to={ROUTES.login}>Login</NavLink>
        <NavLink to={ROUTES.contactUs}>Contact Us</NavLink>
      </div>
    </S.Nav>
  );
};
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
