import { IMAGES } from "../../assets/images";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../../utils/constants";
import css from  './header.module.scss'
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.burgerMenu}>
      <button className="burgerIcon" onClick={toggleMenu}>
        <img src={IMAGES.menuBar} alt="menuBar" className="menu-bar" />
      </button>
      {isOpen && (
        <div className="burger-menu-items-container">
          <div className="burger-menu-items">
            <span className="close-icon" onClick={toggleMenu}>&#10005;</span>
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
            <NavLink className="nav-link" to={ROUTES.login} onClick={toggleMenu}>
            Account
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;