import React, { useState, useEffect } from "react";
import css from "./product.module.scss";
import axios from "axios";
import ProductCard from "./../components/product-card/index";
import { API } from "../config/api";

const Product = ({ addCount, removeCount, addToCart }) => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios(
          `${process.env.REACT_APP_API_URI}${API.product}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    getProduct();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase());
    setCurrentPage(1);
  };

  let filteredProducts = product;
  if (selectedCategory && selectedCategory !== "all") {
    filteredProducts = product.filter(
      (item) => item.category.toLowerCase() === selectedCategory
    );
  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className={css.pagination}>
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className={css.filteredProducts}>
        {currentProducts.map((item) => (
          <ProductCard
            key={item.id}
            addCount={addCount}
            removeCount={removeCount}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    
    </div>
  );
};

export default Product;
