import React, { useState, useEffect } from "react";
import css from "./product.module.scss";
import axios from "axios";
import Button from "./../common/button/index";
import ProductCard from "../components/product-card";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  const addCount = (productId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1
    }));
  };
  const removeCount = (productId) => {
    if (count[productId] > 0) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1
      }));
    }
  };

  const addToCart = (item) => {
    const { id, title, image, price } = item;
    const newItem = { id, title, price, image };
    console.log(newItem);
    //

    let basketItems = JSON.parse(localStorage.getItem("cartItem"));

    if (!basketItems?.length) {
      localStorage.setItem("cartItem", JSON.stringify([newItem]));
    } else {
      const findBasketItem = basketItems.find((item) => item.id === id);

      if (!findBasketItem) {
        localStorage.setItem(
          "cartItem",
          JSON.stringify([...basketItems, newItem])
        );
      } else {
        let updetedItems = basketItems.map((item) => {
          if (item.id === findBasketItem.id) {
            return {
              ...item,
              count: item.count + findBasketItem.count
            };
          }

          return item;
        });

        localStorage.setItem("cartItem", JSON.stringify(updetedItems));
      }
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {}
    };
    getProduct();
  }, []);


console.log(JSON.parse(localStorage.getItem("cartItem")));

  return (
    <div className={css.productContainer}>

      {product.map((item) => (
         <ProductCard item={item}/>
      ))}
    </div>
  );
};

export default Product;
