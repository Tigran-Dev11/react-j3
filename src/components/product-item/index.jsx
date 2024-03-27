import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useGlobalContext } from "../../hooks/use-global-context";
import { COLORS } from "../../assets/style/color";
import Button from "../../common/button";
4;

const ProductItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.price);
  const { basketItems, setBasketItems } = useGlobalContext();

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const removeCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const cardItem = {
      id: item.id,
      img: item.images,
      count,
      price: item.price,
      title: item.title,
    };

    let updatedItems = [];
    if (!basketItems?.length) {
      updatedItems = [cardItem];
    } else {
      const findItemIndex = basketItems.findIndex(
        (elem) => elem.id === item.id
      );

      if (findItemIndex !== -1) {
        updatedItems = basketItems.map((elem, index) => {
          if (index === findItemIndex) {
            return {
              ...elem,
              count: elem.count + count,
            };
          }
          return elem;
        });
      } else {
        updatedItems = [...basketItems, cardItem];
      }
    }

    setBasketItems(updatedItems);
    localStorage.setItem("basketItems", JSON.stringify(updatedItems)); // Save to local storage
  };

  useEffect(() => {
    const storedBasketItems = localStorage.getItem("basketItems");
    if (storedBasketItems) {
      setBasketItems(JSON.parse(storedBasketItems));
    }
  }, []);

  useEffect(() => {
    setPrice(item.price * count);
  }, [count]);

  return (
    <>
      <S.ProductItemContainer>
        <S.ProductItem key={item.id}>
          <S.ProductImage
            src={item.image_link}
            alt={item.name}
          ></S.ProductImage>
          <S.ProductTitle>{item.name}</S.ProductTitle>

          <S.CountContainer>
            <S.Span onClick={addCount}>&#43;</S.Span>
            <p>{count}</p>
            <S.Span onClick={removeCount}>&#x2212;</S.Span>
            <Button
              padding={"5px 5px"}
              border={COLORS.black}
              color={COLORS.black}
              onClick={() => addBasket(item)}
            >
              {"Add"}
            </Button>
          </S.CountContainer>
        </S.ProductItem>
      </S.ProductItemContainer>
    </>
  );
};

export default ProductItem;
