import { NavLink } from "react-router-dom";
import { IMAGES } from "../../assets/images";
import css from "./styled.module.scss";
import { ROUTES } from "../../utils/constants";

const Footer = () => {
  return (
    <footer>
      <div className={css.footerContainer}>
        <div className={css.containerLeft}>
          <div className={css.titleLogoSection}>
            <img src={IMAGES.logo} alt="logo" />
            <p className={css.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
              quae earum ut iure recusandae expedita magni eligendi consequatur
              velit placeat, temporibus consectetur voluptate cupiditate. A
              eaque nulla repudiandae nisi.
            </p>
          </div>
        </div>
        <div className={css.containerRight}>
          <ul>
            SHOP COLLECTIONS
            <li>Men’s Jeans</li>
            <li>Women’s Tops</li>
            <li>Hoodies</li>
            <li>Jackets</li>
            <li>Shoes</li>
          </ul>
          <ul>
            LATEST COLLECTION
            <li>Bags</li>
            <li>Accessories</li>
            <li>Shorts</li>
            <li>Wallets</li>
            <li>Sunglasses</li>
          </ul>
          <ul>
            POPULAR COLLECTION
            <li>Women’s Shorts</li>
            <li>Belts</li>
            <li>Watches</li>
            <li>Women’s Jeans</li>
            <li>Formal Shoe</li>
          </ul>
          <ul>
            QUICK LINKS
            <NavLink className={css.navLink} to={ROUTES.home}>
              <li>Home</li>
            </NavLink>
            <NavLink className={css.navLink} to={ROUTES.shop}>
              <li>Shop</li>
            </NavLink>
            <NavLink className={css.navLink} to={ROUTES.aboutUs}>
              <li>About Us</li>
            </NavLink>
            <NavLink className={css.navLink} to={ROUTES.contactUs}>
        
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
