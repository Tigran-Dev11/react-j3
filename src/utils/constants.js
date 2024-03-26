
const params  = {
  lng: ':lng'
}

export const routesHref = {
  home: "/",
  aboutUs: "/about-us",
  blog: "/blog",
  basket: "/basket",
  shop: "/shop",
  productSingle: "/product-single",
  product: "/product",
}
 
export const ROUTES = {
  home: params.lng + routesHref.home,
  aboutUs: params.lng + routesHref.aboutUs,
  blog: params.lng + routesHref.blog,
  basket: params.lng + routesHref.basket,
  shop: params.lng + routesHref.shop,
  productSingle: params.lng + routesHref.productSingle,
  product:params.lng + routesHref.product,
};
