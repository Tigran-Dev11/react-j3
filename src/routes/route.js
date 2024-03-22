

import AboutUs from "../pages/about-us";
import Home from "../pages/home";
import { ROUTES } from "../utils/constants";

export const routes = [
  {
    id: 1,
    path: ROUTES.home,
     component: Home ,
  },
  {
    id: 2,
    path: ROUTES.aboutUs,
     component:AboutUs 
  },
  {
    id: 3,
    path: ROUTES.jurnal,
     component:AboutUs
  }
];
