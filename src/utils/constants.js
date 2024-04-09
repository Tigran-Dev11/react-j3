           
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
  blog: "/:lng/blog",
  basket: "/:lng/basket",
  shop: "/:lng/shop",
  productSingle: "/:lng/productSingle",
  product: "/:lng/product",
};