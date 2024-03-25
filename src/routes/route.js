import { v4 as uuid } from "uuid";
import AboutUs from "../pages/about-us";
import Home from "../pages/home";
import ProductSingle from "../pages/product-single";
import Product from "../pages/product";
import { ROUTES } from "../utils/constants";
import Shop from "../pages/shop";
import Blog from "../pages/blog";

export const routes = [
  {
    id: uuid(),
    path: ROUTES.home,
    component: Home,
  },
  {
    id: uuid(),
    path: ROUTES.aboutUs,
    component: AboutUs,
  },
  {
    id: uuid(),
    path: ROUTES.shop,
    component: Shop,
  },
  {
    id: uuid(),
    path: ROUTES.productSingle,
    component: ProductSingle,
  },
  {
    id: uuid(),
    path: ROUTES.product,
    component: Product,
  },
  {
    id: uuid(),
    path: ROUTES.blog,
    component: Blog,
  },
 
];
