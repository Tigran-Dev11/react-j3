import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import UserList from "../pages/users/user-list";
import EditUser from "../pages/users/edit-user";

export const routes = [
  {
    id: uuid(),
    path: ROUTES.userList,
    component: UserList,
  },
  {
    id: uuid(),
    path: ROUTES.editUser,
    component: EditUser,
  },
];
