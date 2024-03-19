import { ROUTES } from "../utils/constants"
import Home from "../pages/home/home"
import AboutUs from "../pages/about-us"
import Registr from "../pages/registr"
import Account from "../pages/account"
import Login from "../pages/login"
import Menu from "../pages/menu"

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
        id: 5,
        path:ROUTES.login,
        component: <Login />
    },
    {
        id: 6,
        path:ROUTES.registr,
        component: <Registr/>
    },
    {
        id: 7,
        path:ROUTES.account,
        component: <Account />
    },
   {
    id: 8,
    path:ROUTES.shop,
    component: <Shop />
    },
    {
        id: 9,
        path:ROUTES.basket,
        component: <Basket />
    },


]