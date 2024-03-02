import ButtonForSection from "../../common/button";
import { NavLink } from "react-router-dom";
import "./style.css";
import { ROUTES } from "../../utils/constants";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          We're big believers in the power of a good meal and a friendly place
          to eat it. Stop by for fresh, locally sourced food, served with a warm
          smile.
        </p>
      </div>
      <div className="about-menu">
        <div className="about-section-left"></div>
        <div className="about-section-right">
          <h1 className="about-title">The Best Bite in the Neighborhood</h1>
          <p className="about-description">
            I'm an extra long title. Click here to add your own text and edit
            me. It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font. I’m a great place for you
            to tell a story and let your users know a little more about you.
          </p>
          <NavLink className="nav-link" to={ROUTES.menu}>
            <ButtonForSection title={"View Menu"} />
          </NavLink>
        </div>
      </div>
      <div className="post">
        <h3>Real Food. No Secret Ingredients.</h3>
      </div>
      <div className="about-service">
        <div className="service-section-left">
          <h1 className="service-title">From Our Hearts to Your Plate</h1>
          <p className="service-description">
            I'm an extra long title. Click here to add your own text and edit
            me. It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font. I’m a great place for you
            to tell a story and let your users know a little more about you.
          </p>
          <NavLink className="nav-link" to={ROUTES.home}>
            <ButtonForSection title={"Visit Us"} />
          </NavLink>
        </div>
        <div className="service-section-right"></div>
      </div>
    </div>
  );
};
export default AboutUs;
