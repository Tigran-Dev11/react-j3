import AboutUs from "../pages/about-us"
import ContactUs from "../pages/contact"
import Home from "../pages/home"
import Product from "../pages/praduct"
import Shop from "../pages/shop"
import Login from "../pages/login"
import { ROUTES } from "../utils/constants";
import NotFound from "./../pages/not-found";
export const routes  = [
    {   id: 1,
        href: ROUTES.home,
        component: <Home/>
    },
    {   id:2,
        href: ROUTES.aboutAs,
        component: <AboutUs/>
    },
    {   id:3,
        href: ROUTES.contactUs,
        component: <ContactUs/>
    },
    {   id:4,
        href: ROUTES.product,
        component: <Product/>
    },
    {
        id:5,
        href: ROUTES.shop,
        component: <Shop/>
    },
    {
        id:6,
        href: ROUTES.login,
        component: <Login/>
    },





    {   id:7,
        href: "*",
        component: <NotFound/>
    },






]