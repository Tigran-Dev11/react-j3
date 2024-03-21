import { AboutUs } from "../pages/about-us/aboutUs";
import { Home } from "../pages/home/home";
import { ROUTES } from "../utils/constants";

export const routes = [
  {
    id: 1,
    path: ROUTES.home,
    component: <Home />,
  },
  {
    id: 2,
    path: ROUTES.aboutUs,
    component:<AboutUs/>
  },
];
