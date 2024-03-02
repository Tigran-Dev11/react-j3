import About from "../pages/about/about";
import Carriers from "../pages/carriers/carriers";
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
   ];