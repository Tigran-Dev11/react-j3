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
  login: "/login"
};

export const CLIENTS_ROUTES = {
  home: params.lng + routesHref.home,
  aboutUs: params.lng + routesHref.aboutUs,
  blog: params.lng + routesHref.blog,
  contactUs: params.lng + routesHref.contactUs,
  privacyPolicy: params.lng + routesHref.privacyPolicy,
  registr: params.lng + routesHref.registr,
  login: params.lng + routesHref.login
};
export const adminRoutesHref = {
  admin: "/admin/*",
  dashboard: "/admin/dashboard",
}
export const ADMIN_ROUTES = {
  admin: params.lng + adminRoutesHref.admin,
  dashboard: params.lng + adminRoutesHref.dashboard,
};
