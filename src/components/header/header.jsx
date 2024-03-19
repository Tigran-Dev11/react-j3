import { NavLink } from "react-router-dom";
import { IMAGES } from "../../assets/images";
import css from "./header.module.scss";
import { ROUTES } from "../../utils/constants";




const Header = ({ basketItemsCount }) => {

  return (
    <nav>
      <NavLink to={ROUTES.home}><img src={IMAGES.icon} alt="icon" className={css.icon} /></NavLink>
      <div className={css.pagesContainer}>
        <NavLink className={css.navLink} to={ROUTES.home}>
          Home
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.shop}>
          Shop
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.learn}>
          Learn
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.ourStory}>
          Our Story
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.press}>
          Press
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.quiz}>
          Quiz
        </NavLink>
        <NavLink className={css.navLink} to={ROUTES.registr}>
          <img src={IMAGES.userImages} alt="user" className={css.user} />
        </NavLink>
        <div className={css.bag}> 
        <NavLink className={css.navLink} to={ROUTES.basket}>
          <img
            src={IMAGES.shoppingBag}
            alt="shoppingBag"
            className={css.shoppingBag}
          />
        </NavLink>
        <div className={css.count}>{ basketItemsCount }</div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
