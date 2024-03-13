// import { NavLink } from "react-router-dom";
// import { ROUTES } from "../../utils/constants";
// import  Button  from "../../common/button";
import Button from "../../common/button";
import Product from "../../product/product";
import css from "./styled.module.scss";
import React from "react";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.post}>
        <p>Summer Collection</p>
        <h3>INTRODUCING NEW ARRIVALS</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button variant='primary' title={"VIEW COLLECTION"} />
      </div>


     <Product/>
    </div>
  );
};

export default Home;
