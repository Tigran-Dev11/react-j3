
import { v4 as uuid } from "uuid";
import { IMAGES } from "../../assets/images";


export const productsData =(t)=> [
  {
    id: uuid(),
    img:IMAGES.prismImg,
    description:t("products.description.serum"),
    category:'serum',
  },
  {
    id: uuid(),
    img:IMAGES.moskUp,
    description:t("products.description.mousturizer"),
    category:'mousturzier',
  },
  {
    id: uuid(),
    img:IMAGES.primeraImg,
    description:t("products.description.faceWash"),
    category:'face wash',
  },
  {
    id: uuid(),
    img:IMAGES.farmacyImage,
    description:t("products.description.faceMask"),
    category:'face mask',
  },

];
