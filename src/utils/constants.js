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
};

export const ROUTES = {
  home: params.lng + routesHref.home,
  aboutUs: params.lng + routesHref.aboutUs,
  blog: "/:lng/blog",
  contactUs: "/:lng/contact-us",
  privacyPolicy: "/:lng/privacy-policy",
  registr: "/:lng/registr",
};
