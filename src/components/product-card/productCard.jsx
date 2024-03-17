import React, { useState } from "react";
import css from "./productCard.module.scss";
import Loading from "../../common/loader/loading";
import { UseFetch } from "../../hooks/use-fetch";
import { API } from "../../config/api";
import Button from './../../common/button/index';

const ProductCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [product, loading, error] = UseFetch({ url: API.product });
  const [count, setCount] = useState(0);

  const addCount = (productId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };
  const removeCount = (productId) => {
    if (count[productId] > 0) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };






  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const addToCart=(item, count )=>{
    const { id, title, image, price } = item;
    const newItem = { id, title, price, image, count };
    console.log(newItem);

  }

  return (
    <div className={css.productContainer}>
      {currentProducts?.map((item) => {
        return (
          <div key={item.id} className={css.productItem}>
            <img src={item.image_link} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.price} {item.price_sign}
            </p>
            <div className={css.countChange}>
              <span onClick={addCount} className="material-symbols-outlined">
                add
              </span>
                <p>{count}</p>
              <span onClick={removeCount} className="material-symbols-outlined">
                remove
              </span>
              <Button title={'Add'} variant='btn' onClick={()=>addToCart(item, count)}/>
            </div>
          </div>
        );
      })}
      <div className={css.pagination}>
        {Array.from(
          { length: Math.ceil(product?.length / productsPerPage) },
          (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
