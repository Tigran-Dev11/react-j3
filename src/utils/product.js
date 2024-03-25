import { v4 as uuid } from "uuid";
import { IMAGES } from "../assets/images";


export const products = [
  {
    id: uuid(),
    img:IMAGES.prismImg,
    description:'Skin Bliss AHA + BHA Exfoliating Glow Serum',
    category:'serum',
  },
  {
    id: uuid(),
    img:IMAGES.moskUp,
    description:'Skin Bliss moisturizing cosmetic premium',
    category:'mousturzier',
  },
  {
    id: uuid(),
    img:IMAGES.primeraImg,
    description:'Skin Bliss moisturizing cosmetic premium',
    category:'face wash',
  },
  {
    id: uuid(),
    img:IMAGES.farmacyImage,
    description:'Skin Bliss Clarifying Cleanser',
    category:'face mask',
  },

];
