
import {  ADMIN_ROUTES, CLIENTS_ROUTES } from "../utils/constants";
import ClienLayout from "../layouts/clien-layout";
//import AdminLayout from "../layouts/admin-layout";
import Home from './../pages/client/home';
import AboutUs from './../pages/client/about';
import Blog from "../pages/client/blogs";
import ContactUs from './../pages/client/contact-us';
import PrivacyPolicy from './../pages/client/Privacy-policy';
import Registr from './../pages/client/registr';
// import AdminLayout from "../layouts/admin-layout";
// import Dashboard from "../pages/admin/dashboard";
//import Dashboard from "./../pages/admin/dashboard";


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
      }
    ],
  },

  // {
  //   layout: AdminLayout,
  //   path: ADMIN_ROUTES.admin,
  //   children: [
  //     {
  //       component: Dashboard  ,
  //       path: ADMIN_ROUTES.dashboard,
  //     },
      
  //   ],
  // },
  
];
