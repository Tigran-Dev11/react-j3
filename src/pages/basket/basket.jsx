import React, { useEffect, useState } from "react";
import css from "./basket.module.scss";
import { IMAGES } from "../../assets/images";
const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);

  const addQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setBasketItems(updatedBasketItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cartItem",
      JSON.stringify(updatedBasketItems.filter((item) => item.quantity > 0))
    );
  };
  const removeQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setBasketItems(updatedBasketItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cartItem",
      JSON.stringify(updatedBasketItems.filter((item) => item.quantity > 0))
    );
  };
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    setBasketItems(storedItems);
  }, []);

  const renderBasketItems = () => {
    return basketItems.map((item) => (
      <div className={css.BasketContainer}>
        <div key={item.id} className={css.basketItems}>
          <img src={item.image_link} alt={item.name} />
          <h3>{item.name}</h3>
          <p>
            {item.price}
            {item.price_sign}
          </p>
          <span
            onClick={() => addQuantity(item.id)}
            className="material-symbols-outlined"
        
          >
            add
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => removeQuantity(item.id)}
            className="material-symbols-outlined"
           
          >
            remove
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div className={css.basketContent}>
      <div className={css.box}>
        {basketItems.length > 0 ? (
          renderBasketItems()
        ) : (
         
          <div className={css.noItems}>
         <img src={IMAGES.basket} alt="basket" />
          </div>)}
      </div>
    </div>
  );
};

export default Basket;
