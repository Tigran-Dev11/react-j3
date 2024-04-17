const params = {
  lng: ":lng",
};

export const routesHref = {
  home: "/",
  aboutUs: "/about-us",
  blog: "/blog",
  contactUs: "/contact-us",
  privacyPolicy: "/privacy-policy",
  registr: "/registr",
  login: "/login",
  categorySingle: "/category-single",
  authorSingle:"/author-single",
};

export const CLIENTS_ROUTES = {
  home: params.lng + routesHref.home,
  aboutUs: params.lng + routesHref.aboutUs,
  blog: params.lng + routesHref.blog,
  contactUs: params.lng + routesHref.contactUs,
  privacyPolicy: params.lng + routesHref.privacyPolicy,
  registr: params.lng + routesHref.registr,
  login: params.lng + routesHref.login,
  categorySingle:params.lng + routesHref.categorySingle,
  authorSingle : params.lng + routesHref.authorSingle
};

export const adminRoutesHref = {
  admin: ":lng/admin",
  dashboard: "/:lng/admin/dashboard",
};

export const ADMIN_ROUTES = {
  admin: adminRoutesHref.admin,
  dashboard: adminRoutesHref.dashboard,
};
