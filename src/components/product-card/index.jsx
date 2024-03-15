import { useState } from "react";
import Button from "../../common/button";
import css from "./styled.module.scss";


const ProductCard = ({ item }) => {
  const [count, setCount] = useState(0);
  const addToCart = (item, quantity) => {
    const { id, title, image, price } = item;
    const newItem = { id, title, price, image, quantity };
    console.log(newItem);
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
              count: item.count + findBasketItem.count,
            };
          }

          return item;
        });

        localStorage.setItem("cartItem", JSON.stringify(updetedItems));
      }
    }
  };

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={css.product} key={item.id}>
      <img src={item.image} alt={item.name} />
      <h3>{item.title}</h3>
      <div className={css.productAdd}>
        <p>{item.price}$</p>
        <span onClick={addCount} className="material-symbols-outlined">
          add
        </span>
        <p>{count}</p>
        <span onClick={removeCount} className="material-symbols-outlined">
          remove
        </span>
        <Button
          title={"Add to card"}
          onClick={() => addToCart(item, count)}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default ProductCard;
