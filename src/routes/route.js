import AboutUs from "../pages/about-us"
import ContactUs from "../pages/contact"
import Home from "../pages/home"
import Product from "../pages/praduct"
import Shop from "../pages/shop"
import Login from "../pages/login"
import { ROUTES } from "../utils/constants";

export const routes  = [
    {   id: 1,
      path: ROUTES.home,
        component: Home
    },
    {   id:2,
      path: ROUTES.aboutAs,
        component: AboutUs
    },
    {   id:3,
      path: ROUTES.contactUs,
        component: ContactUs
    },
    {   id:4,
      path: ROUTES.product,
        component: Product
    },
    {
        id:5,
        path: ROUTES.shop,
        component: Shop

    },
    {
        id:6,
        path: ROUTES.login,
        component: Login

    },

]