import { useEffect, useState } from "react";

export const BasketCard = ({ elem }) => {

    const [count, setCount] = useState(elem.count);
    const [price, setPrice] = useState(elem.price * elem.count);


    const addCount = () => {
        setCount((prev) => prev + 1);
      };
    
      const minusCount = () => {
        if (count > 1) {
          setCount((prev) => prev - 1);
        }
      };


      useEffect(()=>{
        setPrice(elem.price * count);
      },[count])

  return (
    <div>
      <img src={elem.img} alt="" />
      <div>
        <p>{elem.title}</p>

        <div>
          <div>
            <span>{price}</span>
            <button onClick={minusCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>

           
          </div>
        </div>
      </div>
    </div>
  );
};
