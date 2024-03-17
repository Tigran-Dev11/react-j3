import React from "react";
import css from "./slideCare.module.scss";
import { Care } from "../../utils/slider";
import Button from "../../common/button";
const SlideCare = () => {
  return (
    <div className={css.SlideCareContainer}>
      {Care.map((item)=>(
          <div key={item.id} className={css.slideCareItem}>
            <img src={item.img} alt="photos" />
            <Button title={item.title} variant='primary'/>
            <p>{item.description}</p>
          </div>

      ))}
    </div>
  );
};

export default SlideCare;
