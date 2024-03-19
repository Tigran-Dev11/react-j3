import { useEffect, useState } from "react";
import css from "./productCard.module.scss";
import { useGlobalContext } from "../../hooks/use-global-context";

export const ProductCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.price);

  const { basketItems, setBasketItems } = useGlobalContext();

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const cardItem = {
      id: item.id,
      img: item.images,
      count,
      price: item.price,
      title: item.title,
    };

    let updatedItems = [];
    if (!basketItems.length) {
      updatedItems = [cardItem];
    } else {
      const findItemIndex = basketItems.findIndex((elem) => elem.id === item.id);

      if (findItemIndex !== -1) {
        updatedItems = basketItems.map((elem, index) => {
          if (index === findItemIndex) {
            return {
              ...elem,
              count: elem.count + count,
            };
          }
          return elem;
        });
      } else {
        updatedItems = [...basketItems, cardItem];
      }
    }

    setBasketItems(updatedItems);
    localStorage.setItem('basketItems', JSON.stringify(updatedItems)); // Save to local storage
  };
 
  useEffect(() => {
    const storedBasketItems = localStorage.getItem('basketItems');
    if (storedBasketItems) {
      setBasketItems(JSON.parse(storedBasketItems));
    }
  }, []);

  useEffect(() => {
    setPrice(item.price * count);
  }, [count]);

  return (
    <div className={css.itemContainer}>
      <img src={item.images} alt={item.title} />
      <p>{item.title}</p>

      <div className={css.counterContainer}>
        <span>{price}$</span>
        <button onClick={minusCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>
        <button onClick={addBasket}>add basket</button>
      </div>
    </div>
  );
};
