import { useEffect, useState } from "react";
import * as S from "./styled"

export const BasketCard = ({ elem,onRemove }) => {

    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem(`basket_${elem.id}`);
        return storedCount ? parseInt(storedCount) : elem.count;
      });
      const [price, setPrice] = useState(elem.price);
    
      const addCount = () => {
        setCount((prev) => {
          const newCount = prev + 1;
          localStorage.setItem(`basket_${elem.id}`, newCount);
          return newCount;
        });
      };
    
      const removeCount = () => {
        if (count > 1) {
          setCount((prev) => {
            const newCount = prev - 1;
            localStorage.setItem(`basket_${elem.id}`, newCount);
            return newCount;
          });
        }
      };
    
      const clearItem = () => {
        localStorage.removeItem(`basket_${elem.id}`);
        const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        const updatedBasketItems = basketItems.filter(item => item.id !== elem.id);
        localStorage.setItem('basketItems', JSON.stringify(updatedBasketItems));
        onRemove(elem);
      };
    
      useEffect(() => {
        setPrice(elem.price * count);
      }, [count]);
    
      return (
        
           <div>
          <img src={elem.img} alt={elem.title} />
          <p>{elem.title}</p>
          <S.CountContainer>
            <S.Span>{price}</S.Span>
            <S.Span onClick={removeCount}>
              -
            </S.Span>
            <S.Span>{count}</S.Span>
            <S.Span onClick={addCount}>
              +
            </S.Span>
          </S.CountContainer>
          <S.Span  onClick={clearItem}>
            X
          </S.Span>
          </div>
       
      );
    
};