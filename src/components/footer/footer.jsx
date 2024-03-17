import css from "./footer.module.scss";
import { HELPFUL, CONTACTUS, COMMUNITY } from "../../utils/links";
import { NavLink } from "react-router-dom";
import Input from "../../common/input/input";
import Button from "../../common/button";

const Footer = () => {
  return (
    <footer>
      <div className={css.helpful}>
        <ul>
          Helpful Links
          {HELPFUL.map((item) => (
            <li key={item.id}>
              <NavLink className={css.navLink}>{item.path}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.community}>
        <ul>
          Community
          {COMMUNITY.map((item) => (
            <li key={item.id}>
              <NavLink className={css.navLink}>{item.path}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.contactUs}>
        <ul>
          Contact Us
          {CONTACTUS.map((item) => (
            <li key={item.id}>
              <NavLink className={css.navLink}>{item.path}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.join}>
        <ul>
          Join our eco-optimist community.
          <p>
            You'll know about secret sales, new products before they launch, and
            occasionally we'll send you cat jokes.
          </p>
          <form className={css.joinForm}>
          
            <Input variant="primary" />
            <Button title={"Join"} variant="secondary" />
          </form>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
