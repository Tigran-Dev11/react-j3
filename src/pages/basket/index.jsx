import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../hooks/use-global-context";
import { ROUTES } from "../../utils/constants";
import { BasketCard } from "./../../component/basket-card";

const Basket = () => {
  const { basketItems } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <div>
      {!basketItems?.length ? (
        <div>
          <p>Basket is Empty</p>

          <button onClick={() => navigate(ROUTES.shop)}>go to shop</button>
        </div>
      ) : (
        basketItems?.map((elem) => <BasketCard elem={elem} key={elem.id} />)
      )}
    </div>
  );
};

export default Basket;
