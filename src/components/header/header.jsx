

import React from 'react';
import * as S from "./styled";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
 
<nav>
      <NavLink className={css.navLink} to={ROUTES.home}>
      </NavLink>
      <div className={css.menuContainer}>
        <NavLink className={css.navLink} to={ROUTES.home}>
          Home
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.shop}>
          Shop
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.login}>
          Login
       </NavLink>

        <NavLink className={css.navLink} to={ROUTES.aboutUs}>
          About Us
        </NavLink>

        <NavLink className={css.navLink} to={ROUTES.contactUs}>
          Contact Us
        </NavLink>
        <Basket/>
      </div>
    </nav>
 
  )
}
export default Header;






