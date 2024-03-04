import { IMAGES } from "../../assets/images";
import { NavLink } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../utils/constants";

import BurgerMenu from "./burgerMenu";

const Header = () => {
  return (
    <nav>
      <NavLink className="nav-link" to={ROUTES.home}>
        <img src={IMAGES.logo} alt="logo" className="logo" />
      </NavLink>
      <div className="menu-container">
        <NavLink className="nav-link" to={ROUTES.home}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.aboutUs}>
          About Us
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.menu}>
          Menu
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.contactUs}>
          Contact Us
        </NavLink>
      </div>
    <BurgerMenu/>
    </nav>
  );
};
export default Header;


