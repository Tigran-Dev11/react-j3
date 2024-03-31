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
<<<<<<< HEAD

    
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

=======
>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
    },
    {
        id:5,
        href: ROUTES.shop,
<<<<<<< HEAD

        components: Shop

     

=======
        components: Shop

>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
    },
    {
        id:6,
        href: ROUTES.login,
<<<<<<< HEAD

        components: Login

    

=======
        components: Login

>>>>>>> 4769f1a41189e52e0dec03f8fc132891dc229628
    },

]