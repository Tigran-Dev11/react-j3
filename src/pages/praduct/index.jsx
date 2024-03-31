import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import React from 'react';
const Product = () => {
  return(
    <div>
    <NavLink to={ROUTES.home}>Home</NavLink>
  </div>
  )
}

export default Product;