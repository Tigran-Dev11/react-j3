import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import Home from "../pages/home";
import Blog from "../pages/blogs";
import AboutUs from "../pages/about";
import ContactUs from "../pages/contact-us";
import PrivacyPolicy from "../pages/Privacy-policy";
import Registr from "../pages/registr";


export const routes = [
  {
    id: uuid(),
    path: ROUTES.home,
    component: Home,
  },
  {
    id: uuid(),
    path: ROUTES.blog,
    component: Blog,
  },
  {
    id: uuid(),
    path: ROUTES.aboutUs,
    component: AboutUs,
  },
  {
    id: uuid(),
    path: ROUTES.contactUs,
    component: ContactUs,
  },
  {
    id: uuid(),
    path: ROUTES.privacyPolicy,
    component: PrivacyPolicy,
  },
  {
    id: uuid(),
    path: ROUTES.registr,
    component: Registr,
  },
 
];
