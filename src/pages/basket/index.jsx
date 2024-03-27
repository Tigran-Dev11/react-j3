import { useGlobalContext } from "../../hooks/use-global-context";
import { BasketCard } from "../../components/basket-item/basket-item";

const Basket = () => {
  const { basketItems, setBasketItems } = useGlobalContext();

  const removeFromBasket = (itemToRemove) => {
    const updatedBasket = basketItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setBasketItems(updatedBasket);
  };
  return (
    <div>
      {!basketItems?.length ? (
        <div>
          <p>empety</p>
        </div>
      ) : (
        basketItems.map((elem) => (
          <BasketCard elem={elem} key={elem.id} onRemove={removeFromBasket} />
        ))
      )}
    </div>
  );
};

export default Basket;
