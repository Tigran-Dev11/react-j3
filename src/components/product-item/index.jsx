import React, { useState } from "react";
import * as S from "./styled";
import { UseFetch } from "../../hooks/use-Fetch";
import { ROUTES } from "../../utils/constants";
import Button from "../../common/button";

const ProductItem = () => {
  const apiUrl = "/products.json?product_type=blush&product_category=cream";
  const [data, loading, error] = UseFetch({ url: apiUrl });
  const [count, setCount] = useState(1);
  if (loading) {
    return <div>loading</div>;
  }

  const addToCart = (item, quantity) => {
    const { id, name, image_link, price } = item;
    const newItem = { id, name, price, image_link, quantity };
    let basketItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    console.log(newItem);
    const findBasketItemIndex = basketItems.findIndex((item) => item.id === id);

    if (findBasketItemIndex === -1) {
      basketItems.push(newItem);
    } else {
      basketItems[findBasketItemIndex].quantity += quantity;
    }

    localStorage.setItem("cartItem", JSON.stringify(basketItems));
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleProductClick = (item) => {

    localStorage.setItem("selectedProduct", JSON.stringify(item));


  }

  return (
    <>
      {data && (
        <S.ProductItemContainer>
          {data.map((product) => (
            <S.ProductItem key={product.id} onClick={handleProductClick}>
              <S.ProductImage
                src={product.image_link}
                alt={product.name}
              ></S.ProductImage>
              <S.ProductTitle>{product.name}</S.ProductTitle>

              <S.CountContainer>
                <S.Span onClick={addCount}>&#43;</S.Span>
                <p>{count}</p>
                <S.Span onClick={removeCount}>&#x2212;</S.Span>
                <Button
                  title={"Add to basket"}
                  onClick={() => addToCart(item, count)}
                />
              </S.CountContainer>
            </S.ProductItem>
          ))}
        </S.ProductItemContainer>
      )}
    </>
  );
};

export default ProductItem;
