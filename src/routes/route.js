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
        href: ROUTES.product,
        components: Product
    },
    {
        id:5,
        href: ROUTES.shop,
        components: Shop

>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
    },
    {
        id:6,
        href: ROUTES.login,
        components: Login

>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
    },

]