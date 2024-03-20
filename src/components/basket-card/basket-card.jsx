import React, { useEffect, useState } from "react";
import css from "./basket-card.module.scss";
import Panginate from "../pangination/panginate";

const BasketCard = ({ elem, onRemove }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(`basket_${elem.id}`);
    return storedCount ? parseInt(storedCount) : elem.count;
  });
  const [price, setPrice] = useState(elem.price);

  const addCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      localStorage.setItem(`basket_${elem.id}`, newCount);
      return newCount;
    });
  };

  const removeCount = () => {
    if (count > 1) {
      setCount((prev) => {
        const newCount = prev - 1;
        localStorage.setItem(`basket_${elem.id}`, newCount);
        return newCount;
      });
    }
  };

  const clearItem = () => {
    localStorage.removeItem(`basket_${elem.id}`);
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    const updatedBasketItems = basketItems.filter(item => item.id !== elem.id);
    localStorage.setItem('basketItems', JSON.stringify(updatedBasketItems));
    onRemove(elem);
  };

  useEffect(() => {
    setPrice(elem.price * count);
  }, [count]);

  return (

    <div className={css.basketItem}>
      <img src={elem.img} alt={elem.title} />
      <p>{elem.title}</p>
      <div className={css.basketAddRemove}>
        <span>{price}</span>
        <button className={css.remove} onClick={removeCount}>
          -
        </button>
        <span>{count}</span>
        <button className={css.add} onClick={addCount}>
          +
        </button>
      </div>
      <div className={css.clear} onClick={clearItem}>
        X
      </div>
      <Panginate />
    </div>
  )
};

export default BasketCard;

