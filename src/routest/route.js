
import { ROUTES } from "../utils/constants";
import Shop from './../pages/shop/index';
import Basket from './../pages/basket/index';

export const routes  = [
    {
        id:6,
        href: ROUTES.shop,
        component: <Shop/>
    },
    {
        id:7,
        href: ROUTES.basket,
        component: <Basket/>
    },
   
]