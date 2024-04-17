import { ADMIN_ROUTES, CLIENTS_ROUTES } from "../utils/constants";

import Home from "/src/pages/client/home";
import AboutUs from "/src/pages/client/about";
import Blog from "/src/pages/client/blogs";
import ContactUs from "/src/pages/client/contact-us";
import PrivacyPolicy from "/src/pages/client/Privacy-policy";
import Registr from "/src/pages/client/registr";
import AdminLayout from "/src/layouts/admin-layout";
import Login from "/src/pages/client/login";
import CategorySingle from "/src/pages/client/category-single";
import ClienLayout from "/src/layouts/clien-layout";
import AuthorSingle from "/src/pages/client/author-single";
import Dashborad from "../pages/admin/dashboard";


export const routes = [
  {
    layout: ClienLayout,
    path: "",
    children: [
      {
        component: Home,
        path: CLIENTS_ROUTES.home,
      },
      {
        component: AboutUs,
        path: CLIENTS_ROUTES.aboutUs,
      },
      {
        component: Blog,
        path: CLIENTS_ROUTES.blog,
      },
      {
        component: ContactUs,
        path: CLIENTS_ROUTES.contactUs,
      },
      {
        component: PrivacyPolicy,
        path: CLIENTS_ROUTES.privacyPolicy,
      },
      {
        component: Registr,
        path: CLIENTS_ROUTES.registr,
      },
      {
        component: Login,
        path: CLIENTS_ROUTES.login,
      },
      {
        component: CategorySingle,
        path: CLIENTS_ROUTES.categorySingle,
      },
      {
        component: AuthorSingle,
        path: CLIENTS_ROUTES.authorSingle,
      },
    ],
  },

  {
    layout: AdminLayout,
    path: ADMIN_ROUTES.admin,
    children: [
      {
        component: Dashborad,
        path: ADMIN_ROUTES.dashboard
      },
    ],
  },
];
