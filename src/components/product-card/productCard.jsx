import React, { useState } from "react";
import css from "./productCard.module.scss";
import Loading from "../../common/loader/loading";
import { UseFetch } from "../../hooks/use-fetch";
import { API } from "../../config/api";
import Button from "./../../common/button/index";

const ProductCard = ({ item}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [product, loading, error] = UseFetch({ url: API.product });
  console.log(product);
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");


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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase());
   
    setCurrentPage(1);
  };

  let filteredProducts = product;
  if (selectedCategory && selectedCategory !== "all") {
    filteredProducts = product.filter(
      (item) =>
        item.category && item.category.toLowerCase() === selectedCategory
    )
    
  }else if (!selectedCategory && selectedCategory !== "all") {
    filteredProducts = product?.filter((item) => !item.category);
  }
 

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={css.productContainer}>
      <div className={css.categoryFilter}>
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pencil">Pencil</option>
          <option value="lipstick">Lipstick</option>
          <option value="concealer">Concealer</option>
          <option value="">Other</option>
          <option value="bb_cc">BB CC Cream</option>
          <option value="highlighter">Highlighter</option>
          <option value="lip_gloss">Lip Glos</option>
          <option value="powder">Powder</option>
          <option value="liquid">Liquid</option>
        </select>
        
      </div>
      <div className={css.itemContainer}>
        {currentProducts?.map((item) => (
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
              <Button
                title={"Add"}
                variant="btn"
                onClick={() => addToCart(item, count)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={css.pagination}>
        {Array.from(
          { length: Math.ceil(filteredProducts?.length / productsPerPage) },
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
