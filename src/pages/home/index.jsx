import "./style.css";
import { Button ,} from "./../../common/button";
import {
  CreateBoxTemplate,
  CreateServiceBox,
} from "./../../components/helpers/helpers";
import {ButtonStyleOne,ButtonStyleTwo,ButtonStyleThree} from './../../common/button/index';

const Home = () => {
  return (
    <div className="home-container">
      <div className="sectionOne">
        <p className="title">THIS IS VELOCITY</p>
        <p className="infoTitle">A FREE REPSONSIVE TEMPLATE BY WEBFLOW</p>
        <div className="btn-line">
          <Button title="sign up" style={ButtonStyleTwo} />
          <Button title="learn more"  style={ButtonStyleOne} />
        </div>
      </div>

      <div className="sectionTwo">
        <h1>WHAT WE DO</h1>
        <p>THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</p>
        <div className="box-line">
          <CreateBoxTemplate />
        </div>
      </div>
      <div className="service-section">
        <h1>services</h1>
        <p>This is some text inside of a div block.</p>
        <CreateServiceBox />
      </div>
      <div className="tab-section">
        <h1>Tab Section</h1>
        <p>This is some text inside of a div block.</p>
        <div className=" tab-section-btns">
          <Button title="Tab Button 1" style={ButtonStyleThree} />
          <Button title="Tab Button 2" style={ButtonStyleThree}/>
          <Button title="Tab Button 3" style={ButtonStyleThree} />
        </div>
        <div className="img-section"></div>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
    </div>
  );
};
export default Home;
