import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const {lng} = useParams();

  useEffect(() => {
    
  }, [lng]);

  return <div>
    <NavLink to={'/arm/product/1234'}>
       product-1
    </NavLink>
  </div>;
};

export default Product;
