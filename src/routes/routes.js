import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import Home from "../pages/home";

export const routes = [
    {
        id:uuid(),
        path:ROUTES.home,
        component:Home,
    }

]
  