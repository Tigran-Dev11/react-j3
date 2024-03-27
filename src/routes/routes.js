import { v4 as uuid } from "uuid";
import { ROUTES } from "../utils/constants";
import Home from "../pages/home";
import Product from "../pages/product";
import SingleProduct from "../pages/single-product";
import UserList from "../pages/users/user-list";

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
];
