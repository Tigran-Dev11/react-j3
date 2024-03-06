import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";

import Menu from "../pages/menu";
import { ROUTES } from "../utils/constants";
import NotFound from './../pages/not-found';
import Login from './../pages/login/index';
import Registr from "../pages/registr";
import Account from "../pages/account";

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
        id: 5,
        path:ROUTES.login,
        component: <Login />
    },
    {
        id: 6,
        path:ROUTES.registr,
        component: <Registr />
    },
    {
        id: 7,
        path:ROUTES.account,
        component: <Account />
    },
    {
        id: 6,
        path:'*',
        component: <NotFound/>
    }
]