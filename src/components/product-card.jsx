import { useEffect, useState } from "react";
import css from "./product-item.module.scss";
import { useGlobalContext } from "../hooks/use-global-context";

export const ProductCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.price);

  const {basketItems,setBasketItems} = useGlobalContext()

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addBasket = ()=>{
      const cardItem = {
        id: item.id,
        img: item.image,
        count,
        price: item.price,
        title: item.title
      }


      if(!basketItems.length){
        setBasketItems([cardItem])
      }else{

        const findItem = basketItems.find((elem)=>elem.id ===item.id);

        if(findItem?.id){
            const updatedItems = basketItems.map((elem)=>{
                if(elem.id === item.id){
                    return {
                        ...elem,
                        count: elem.count + count,
                    }
                }

                return elem
            })

            setBasketItems(updatedItems)
        }else{
            setBasketItems((prev)=>[...prev,cardItem ])
        }
      }

  }

  useEffect(()=>{
    setPrice(item.price * count);
  },[count])


  return (
    <div className={css.itemContainer}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>

      <div className={css.counterContainer}>
        <span>{price}</span>
        <button onClick={minusCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>

        <button onClick={addBasket}>add basket</button>
      </div>
    </div>
  );
};