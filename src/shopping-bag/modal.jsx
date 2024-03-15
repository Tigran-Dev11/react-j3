import React, { useState, useEffect } from "react";
import css from "./modal.module.scss";

const Modal = ({ closeModal }) => {
  const [basketItems, setBasketItems] = useState([]);
 

  const addQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setBasketItems(updatedBasketItems.filter(item => item.quantity > 0))
    localStorage.setItem("cartItem", JSON.stringify(updatedBasketItems.filter(item => item.quantity > 0)));
  };
  const removeQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId ) {
        return {
          ...item,
          quantity: item.quantity -1,
        };
      }
      return item;
    });
    setBasketItems(updatedBasketItems.filter(item => item.quantity > 0))
    localStorage.setItem("cartItem", JSON.stringify(updatedBasketItems.filter(item => item.quantity > 0)));
  };
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    setBasketItems(storedItems);
  }, []);

  const renderBasketItems = () => {
    return basketItems.map((item) => (
      <div key={item.id} className={css.basketItems}>
        <img src={item.image} alt={item.name} />
        <h3>{item.title}</h3>
        <p>Price: {item.price}$</p>
        <span onClick={() => addQuantity(item.id)}  className="material-symbols-outlined">
          add
        </span>
        <p>{item.quantity}</p>
        <span onClick={()=>removeQuantity(item.id)} className="material-symbols-outlined">
          remove
        </span>
      </div>
    ));
  };

  return (
    <div className={css.modalOverlay} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={css.closeIcon} onClick={closeModal}>
          &#10005;
        </span>
        <div className={css.box}>
          {basketItems.length > 0 ? (
            renderBasketItems()
          ) : (
            <h1>Your basket is empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
