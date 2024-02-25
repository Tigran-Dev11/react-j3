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
        <p >Phasellus gravida semper nisi</p>
        <p >Suspendisse nisl elit</p>
        <p>Dellentesque habitant morbi</p>
        <p>Etiam sollicitudin ipsum</p>
      </div>
      <CreateSocialMediaLine />
    </footer>
  );
};
export default Footer;
