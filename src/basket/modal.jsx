import React from "react";
import css from "./modal.module.scss";

const Modal = ({ children, closeModal }) => {
  return (
    <div className={css.modalOverlay} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={css.closeIcon} onClick={closeModal}>
          &#10005;
        </span>
        {children}
    
      </div>
    </div>
  );
};

export default Modal;
