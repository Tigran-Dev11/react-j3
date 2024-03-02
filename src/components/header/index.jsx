import { IMAGES } from "../../assets/images";
import { NavLink } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
  return (
    <nav>
  
      <NavLink className="nav-link" to={ROUTES.home}>
      < img src={IMAGES.logo} alt="logo" className="logo" />
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
    </nav>
  );
};
export default Header;

export  const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`burger-menu-items ${isOpen ? 'active' : ''}`}>
        <NavLink className="nav-link" to={ROUTES.home} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.aboutUs} onClick={toggleMenu}>
          About Us
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.menu} onClick={toggleMenu}>
          Menu
        </NavLink>
        <NavLink className="nav-link" to={ROUTES.contactUs} onClick={toggleMenu}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};



