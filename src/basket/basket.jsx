
import React, { useState } from "react";
import css from "./basket.module.scss";
import Modal from "./modal";
import { IMAGES } from "../assets/images";

const Basket = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={css.shoppingBagContainer}>
      <img src={IMAGES.shoppingBag} alt="shoppingBag"  onClick={toggleModal} className={css.shoppingBag}>
      </img>

      {open && (
        <Modal closeModal={toggleModal}>
          <div className={css.modalContent}>
        
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Basket;



