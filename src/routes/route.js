import Login from "../login/login"
import AboutUs from "../pages/about-us"
import ContactUs from "../pages/contact"
import Home from "../pages/home"
import Product from "../pages/praduct"
import Shop from "../pages/shop"

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
        href: ROUTES.product,
        components: Product
    },
    {
        id:5,
        href: ROUTES.shop,
        components: Shop

    },
    {
        id:6,
        href: ROUTES.login,
        components: Login

    },

]