import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import Home from "../pages/home";
import Product from "../pages/product";
import SingleProduct from "../pages/single-product";
import UserList from "../pages/users/user-list";
import EditUser from "../pages/users/edit-user";
import Todo from "../pages/todos";

export const routes = [
  {
    id: uuid(),
    path: ROUTES.home,
    component: Home,
  },
  {
    id: uuid(),
    path: ROUTES.product,
    component: Product,
  },
  {
    id: uuid(),
    path: ROUTES.productSingle,
    component: SingleProduct,
  },
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
  {
    id: uuid(),
    path: ROUTES.todo,
    component:Todo
  }
];
