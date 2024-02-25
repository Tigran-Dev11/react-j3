import "./style.css";
import {CreateSocialMediaLine} from './../helpers/helpers.js'
const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h1>about velocity</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="links">
        <h1>useful links</h1>
        <a href="#">Phasellus gravida semper nisi</a>
        <a href="#">Suspendisse nisl elit</a>
        <a href="#">Dellentesque habitant morbi</a>
        <a href="#">Etiam sollicitudin ipsum</a>
      </div>
      <CreateSocialMediaLine />
    </footer>
  );
};
export default Footer;
