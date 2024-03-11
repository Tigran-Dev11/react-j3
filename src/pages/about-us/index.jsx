
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import css from "./styled.module.scss"
import Button  from "../../common/button";
const AboutUs = () => {
  return (
    <div className={css.aboutUsSection}>
      <div className={css.aboutSection}>
        <h1 className={css.aboutTitle}>About Us</h1>
        <p className={css.aboutDescription}>
          We're big believers in the power of a good meal and a friendly place
          to eat it. Stop by for fresh, locally sourced food, served with a warm
          smile.
        </p>
      </div>
      <div className={css.aboutMenu}>
        <div className={css.aboutSectionLeft}></div>
        <div className={css.aboutSectionRight}>
          <h1 className={css.aboutTitle}>The Best Bite in the Neighborhood</h1>
          <p className={css.aboutDescription}>
            I'm an extra long title. Click here to add your own text and edit
            me. It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font. I’m a great place for you
            to tell a story and let your users know a little more about you.
          </p>
          <NavLink className={css.navLink} to={ROUTES.menu}>
            <Button title={"View Menu"}  variant={'secondary'}/>
          </NavLink>
        </div>
      </div>
      <div className={css.post}>
        <h3>Real Food. No Secret Ingredients.</h3>
      </div>
      <div className={css.aboutService}>
        <div className={css.serviceSectionLeft}>
          <h1 className={css.serviceTitle}>From Our Hearts to Your Plate</h1>
          <p className={css.serviceDescription}>
            I'm an extra long title. Click here to add your own text and edit
            me. It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font. I’m a great place for you
            to tell a story and let your users know a little more about you.
          </p>
          <NavLink className={css.navLink} to={ROUTES.home}>
            <Button title={"Visit Us"} variant={'secondary'}/>
          </NavLink>
        </div>
        <div className={css.serviceSectionRight}></div>
      </div>
    </div>
  );
};
export default AboutUs;
