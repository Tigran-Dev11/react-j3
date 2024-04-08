import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import Home from "../pages/home";
import Todos from "../pages/todo";
import Album from "../pages/albums";
import User from "../pages/users";

export const routes = [
  {
    id: uuid(),
    path: ROUTES.home,
    component: Home,
  },
  {
    id: uuid(),
    path: ROUTES.todo,
    component: Todos,
  },
  {
    id: uuid(),
    path: ROUTES.album,
    component: Album
  },
  {
    id: uuid(),
    path: ROUTES.user,
    component: User
  },
];
