import React, { useState, useEffect } from "react";
import css from "./product.module.scss";
import axios from "axios";
import Button from "./../common/button/index";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  const addCount = (productId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };
  const removeCount = (productId) => {
    if (count[productId] > 0) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  const addToCart = (item) => {
    const { id, title, image, price } = item;
    const newItem = { id, title, price, image };
    console.log(newItem);
    localStorage.setItem("cartItem", JSON.stringify(newItem));
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

  return (
    <div className={css.productContainer}>
      {product.map((item) => (
        <div className={css.product} key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.title}</h3>
          <div className={css.productAdd}>
            <p>{item.price}$</p>
            <span
              onClick={() => addCount(item.id)}
              className="material-symbols-outlined"
            >
              add
            </span>
            <p>{count[item.id] || 0}</p>
            <span
              onClick={() => removeCount(item.id)}
              className="material-symbols-outlined"
            >
              remove
            </span>
            <Button
              title={"Add to card"}
              onClick={()=>addToCart(item)}
              variant="secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
