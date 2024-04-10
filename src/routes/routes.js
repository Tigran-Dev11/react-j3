import AdminLayout from "../layouts/admin-layout";
import ClientLayout from "../layouts/client-layout";
import Dashboard from "../pages/admin/dashboard";
import Home from "../pages/client/home";

export const CLIENT_ROUTES = {
  home: ""
};

export const ADMIN_ROUTES = {
  admin: "admin/*",
  dashboard: "admin/dashboard"
};

export const routes = [
  {
    layout: ClientLayout,
    path: "",
    children: [
      {
        component: Home,
        path: CLIENT_ROUTES.home
      }
    ]
  },
  {
    layout: AdminLayout,
    path: ADMIN_ROUTES.admin,
    children: [
      {
        component: Dashboard,
        path: ADMIN_ROUTES.dashboard
      }
    ]
  }
];
