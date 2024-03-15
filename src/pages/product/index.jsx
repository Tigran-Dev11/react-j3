import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Loader } from "../../common/loader";
import css from "./product.module.scss";
import { API } from "../../configs/api";
import { useFetch } from "../../hooks/use-fetch";

const Product = () => {
  const [product, loading, error] = useFetch({ url: API.product });

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <NavLink to={ROUTES.home}>Home</NavLink>
      <div className={css.productContainer}>
        {product?.map((item) => (
          <div key={item.id} className={css.productItem}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
