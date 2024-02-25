import React from "react";
import { Button } from "./../../common/button";
import {ButtonAllLearn} from './../../common/button/index'
export const menu = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const CreateMenuNavbar = () => {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CreateMenuNavbar;

export const boxes = [
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcb4_feather-15-white.svg",
    title: "GRAPHIC DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dc9d_feather2-17-white.svg",
    title: "AWESOME CODE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcc5_feather2-22-white.svg",
    title: "FREE TEMPLATE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];
export const Serviceboxes = [
  {
    img: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcd3_city-scape.jpg",
    title: "SERVICES ONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  },
  {
    img: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcd1_photo-1416400639808-f41f0c149b09.jpg",
    title: "SERVICES TWO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  },
];

export const CreateBoxTemplate = () => {
  return (
    <div>
      {boxes.map((elem) => (
        <div className="boxes">
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
      {Serviceboxes.map((elem) => (
        <div className="serviceBox">
          <img src={elem.img} alt={elem.title} />
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <Button title="Learn More" style={ButtonAllLearn} />
        </div>
      ))}
    </div>
  );
};

export const SocialMedia = [
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcd6_social-18.svg",
    title: "Twitter",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcb7_social-03.svg",
    title: "Facebook",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dc9e_social-11.svg",
    title: "Pinterest",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcc8_social-06.svg",
    title: "Google",
  },
  {
    icon: "https://uploads-ssl.webflow.com/65d9cf98ff5fcdc97ca9dc2a/65d9cf99ff5fcdc97ca9dcab_social-12.svg",
    title: "WebFlow",
  },
];
export  const CreateSocialMediaLine = () => {
  return (
   
    <div className="social-media-line">
         <h1>social</h1>
      {SocialMedia.map((elem) => (
        <div className="social-media">
          <img src={elem.icon} alt={elem.title} />
          <h1>{elem.title}</h1>
        </div>
      ))}
    </div>
  );
};
