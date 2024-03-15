import { IMAGES } from "../../assets/images";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import css from "./header.module.scss";

import Basket from "../../shopping-bag/basket";
const Header = () => {
  return (
    <nav>
      <NavLink className={css.navLink} to={ROUTES.home}>
        <img src={IMAGES.logo} alt="logo" className="logo" />
      </NavLink>
      <div className={css.menuContainer}>
        <NavLink className={css.navLink} to={ROUTES.home}>
          Home
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.shop}>
          Shop
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
  );
};
export default Header;
