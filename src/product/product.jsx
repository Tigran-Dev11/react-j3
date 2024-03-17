import React from "react";
import { UseFetch } from "../hooks/use-fetch";
import { API } from "../config/api";
import css from "./product.module.scss";

import Loading from './../common/loader/loading';

const [product, loading, error] = UseFetch({ url: API.product });
if (loading) {
  return <Loading />;
}
const Product = () => {
  return (
    <div className={css.productContainer}>
      {product.map((item) => {
        return (
          <div key={item.id} className={css.productItem}>
            <img src={item.image_link} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.price} {item.price_sign}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
