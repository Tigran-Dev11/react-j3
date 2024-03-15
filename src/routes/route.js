import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import Shop from "../pages/shop";


import { ROUTES } from "../utils/constants";
import NotFound from "./../pages/not-found";

export const routes = [
  {
    id: 1,
    path: ROUTES.home,
    component: <Home />,
  },
  {
    id: 2,
    path: ROUTES.aboutUs,
    component: <AboutUs />,
  },
  {
    id: 3,
    path: ROUTES.shop,
    component: <Shop/>,
  },
  {
    id: 4,
    path: ROUTES.contactUs,
    component: <ContactUs />,
  },

  {
    id: 5,
    path: "*",
    component: <NotFound />,
  },
];
