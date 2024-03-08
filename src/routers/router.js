import About from "../pages/about/about";
import Carriers from "../pages/carriers/carriers";
import Login from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Subscriber from "../pages/subscriber/subscriber";
import Tecnologies from "../pages/tecnologies/tecnologies";
import { ROUTES } from "../utils/const";

export const routes =[
    {
        id: 1,
        path:ROUTES.tecnologies,
        component: <Tecnologies/>
    },
    {
        id: 2,
        path:ROUTES.about,
        component: <About/>
    },
    {
        id: 3,
        path:ROUTES.carriers,
        component: <Carriers/>
    },
    {
        id: 4,
        path:ROUTES.subscriber,
        component: <Subscriber/>
    },

    {
        id: 5,
        path:ROUTES.registration,
        component: <Registration/>
    },
    {
        id: 6,
        path:ROUTES.login,
        component: <Login/>
    },


   ];