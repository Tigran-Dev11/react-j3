import { IMAGES } from "../../assets/images";
import "./index.css";

const ContactUs = (props) => {

    const { title, description, count } = props;



    console.log('render');

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={IMAGES.bgImage} alt="bg-image" />
      <h5>{count}</h5>
    </div>
  );
};

export default ContactUs;
