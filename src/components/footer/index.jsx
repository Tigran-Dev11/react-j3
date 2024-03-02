import "./style.css";
import { Button } from "./../../common/button/index";
import Input from "../../common/input/input";
const Footer = () => {
  return (
    <footer>
      <div className="section-newsletter">
        <h1 className="title-footer">Newsletter</h1>
        <p>Stay up to date with all the latest from 47th Cafe</p>
        <form className="form">
          <Input placeholder={"Email"} />
          <Button title={"Join"} />
        </form>
      </div>
      <div className="section-talktous">
        <h1 className="title-footer">Talk to Us</h1>
        <p>
          123-456-7890 <br /> info@mysite.com
        </p>
        <p>
          500 Terry Francine St. <br />
          San Francisco, CA 94158
        </p>
      </div>
      <div className="section-social">
        <p className="socil-media">Instagram</p>
        <p className="socil-media">Facebook</p>
        <p className="socil-media">Twitter</p>
      </div>
    </footer>
  );
};
export default Footer;
