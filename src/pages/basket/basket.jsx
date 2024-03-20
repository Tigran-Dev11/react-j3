import { useNavigate } from "react-router-dom";
import css from './basket.module.scss'
import { ROUTES } from "../../utils/constants";
import { useGlobalContext } from "../../hooks/use-global-context";
import BasketCard from "../../components/basket-card/basket-card";
import { IMAGES } from "../../assets/images";
import Button from './../../common/button/index';



const Basket = () => {
  const { basketItems,setBasketItems } = useGlobalContext();



  const navigate = useNavigate();
  const removeFromBasket = (itemToRemove) => {
    const updatedBasket = basketItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setBasketItems(updatedBasket);
  };
  return (
    <div className={css.basketContainer}>
   
      {!basketItems.length ? (
        <div className={css.emptyBasket}>
         <img src={IMAGES.basket} alt="basket" />

          <Button variant='primary' title={"Go Shop"} onClick={() => navigate(ROUTES.shop)}/>
        </div>
      ) : (
       
      
        basketItems.map((elem) => <BasketCard elem={elem} key={elem.id} onRemove={removeFromBasket} />)
        
     )}
    
    </div>
  );
};

export default Basket;