import { useNavigate } from "react-router-dom";
import { BasketCard } from "../../components/basket-card";
import { useGlobalContext } from "../../hooks/use-global-context";
import { ROUTES } from "../../utils/constants";

const Basket = () => {
  const { basketItems,setBasketItems } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <div>
      {!basketItems.length ? (
        <div>
          <p>Basket is Empty</p>

          <button onClick={() => navigate(ROUTES.shop)}>go to shop</button>
        </div>
      ) : (
        basketItems.map((elem) => <BasketCard elem={elem} key={elem.id} />)
      )}
    </div>
  );
};

export default Basket;