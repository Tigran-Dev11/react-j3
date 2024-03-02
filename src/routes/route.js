import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";

import Menu from "../pages/menu";
import { ROUTES } from "../utils/constants";
import NotFound from './../pages/not-found';

export const routes =[
    {
        id: 1,
        path:ROUTES.home,
        component: <Home/>
    },
    {
        id: 2,
        path:ROUTES.aboutUs,
        component: <AboutUs/>
    },
    {
        id: 3,
        path:ROUTES.menu,
        component: <Menu/>
    },
    {
        id: 4,
        path:ROUTES.contactUs,
        component: <ContactUs/>
    },
    {
        id: 6,
        path:'*',
        component: <NotFound/>
    }
]