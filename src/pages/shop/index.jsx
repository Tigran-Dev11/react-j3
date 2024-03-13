import css from "./styled.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../product/product";
import Button from "../../common/button";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.btnsContainer}>
        <button onClick={() => filterProducts("all")}>All</button>
        <button onClick={() => filterProducts("electronics")}>
          Electronics
        </button>
        <button onClick={() => filterProducts("jewelery")}>Jewelery</button>
        <button onClick={() => filterProducts("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => filterProducts("women's clothing")}>
          Women's Clothing
        </button>
      </div>
      <div className={css.filteredItemContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={css.productItem}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <div className={css.productAdd}>
              <p>{product.price}$</p>
              <span
                onClick={() => addCount(product.id)}
                className="material-symbols-outlined"
              >
                add
              </span>
              <p>{count[product.id] || 0}</p>
              <span
                onClick={() => removeCount(product.id)}
                className="material-symbols-outlined"
              >
                remove
              </span>
              <Button title={"Add to card"} variant="secondary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
