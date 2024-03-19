import Basket from "../pages/basket/basket";
import Home from "../pages/home/home";

import Learn from "../pages/learn/learn";
import NotFound from "../pages/not-found";
import OurStory from "../pages/our-story/ourStory";
import Press from "../pages/press/press";
import Quiz from "../pages/quiz/quiz";
import Registr from "../pages/registr/registr";
import Shop from "../pages/shop/shop";
import { ROUTES } from "../utils/constants";


export const routes = [
  {
    id: 1,
    path: ROUTES.home,
    component: <Home/>,
  },
  {
    id: 2,
    path: ROUTES.shop,
    component: <Shop />,
  },
  {
    id: 3,
    path: ROUTES.learn,
    component: <Learn />,
  },
  {
    id:4,
    path:ROUTES.ourStory,
    component:<OurStory/>
  },{
    id:5,
    path:ROUTES.press,
    component:<Press/>
  },
  {
    id:6,
    path:ROUTES.quiz,
    component:<Quiz/>
  },
  {
    id:7,
    path:ROUTES.registr,
    component:<Registr/>
  },
  {
    id:8,
    path:ROUTES.basket,
    component:<Basket/>
  },
  {
    id:8,
    path:ROUTES.notFound,
    component:<NotFound/>
  },
];
