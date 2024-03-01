import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Product from "../pages/product";
import { ROUTES } from "../utils/constants";



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
    {   id:5,
        href: "*",
        component: <NotFound/>
    },
]