import React from "react";
import { Button,ButtonAllLearn} from "./../../common/button/index";

// import { IMAGES } from "./../assets/images";
import {Serviceboxes,Menu,Boxes,SocialMedia} from "../../constant/index";

const CreateMenuNavbar = () => {
  return (
    <ul>
      {Menu.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CreateMenuNavbar;



export const CreateBoxTemplate = () => {
  return (
    <div>
      {Boxes.map((elem, index) => (
        <div key={index} className="boxes">
          <img src={elem.icon} alt={elem.title} />
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
        </div>
      ))}
    </div>
  );
};
export const CreateServiceBox = () => {
  return (
    <div>
      {Serviceboxes.map((elem, index,) => (
        <div key = {index} className="serviceBox">
          <img src={elem.img} alt={elem.title} />
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <Button title="Learn More" style={ButtonAllLearn} />
        </div>
      ))}
    </div>
  );
};

export  const CreateSocialMediaLine = () => {
  return (
   
    <div className="social-media-line">
         <h1>social</h1>
      {SocialMedia.map((elem, index) => (
        <div key ={index}  className="social-media">
          <img src={elem.icon} alt={elem.title} />
          <h1>{elem.title}</h1>
        </div>
      ))}
    </div>
  );
};
