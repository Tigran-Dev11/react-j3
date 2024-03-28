import AboutUs from "../pages/about-us"
import ContactUs from "../pages/contact"
import Home from "../pages/home"
import Product from "../pages/praduct"
import Shop from "../pages/shop"
import Login from "../pages/login"
import { ROUTES } from "../utils/constants";
export const routes  = [
    {   id: 1,
        href: ROUTES.home,
<<<<<<< HEAD
        components: Home
    },
    {   id:2,
        href: ROUTES.aboutAs,
        components: AboutUs
    },
    {   id:3,
        href: ROUTES.contactUs,
        components: ContactUs
    },
    {   id:4,
        href: ROUTES.product,
        components: Product
=======
        component: Home
    },
    {   id:2,
        href: ROUTES.aboutAs,
        component: AboutUs
    },
    {   id:3,
        href: ROUTES.contactUs,
        component: ContactUs
    },
    {   id:4,
        href: ROUTES.product,
        component: Product
>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
    },
    {
        id:5,
        href: ROUTES.shop,
<<<<<<< HEAD
        components: Shop
=======
        component: Shop
>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
    },
    {
        id:6,
        href: ROUTES.login,
<<<<<<< HEAD
        components: Login
=======
        component: Login
>>>>>>> 91e73d7a87070c3f04646877cb7ccc16531f396d
    },

]