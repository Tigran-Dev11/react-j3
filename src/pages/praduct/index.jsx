import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Product = () => (
  <div>
    <NavLink to={ROUTES.home}>Home</NavLink>
  </div>
);

export default Product;