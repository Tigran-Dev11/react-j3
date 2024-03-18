import ProductCard from "../components/product-card/productCard";


const Product = ({ addCount, removeCount, addToCart,updateBasketCount  }) => {
  return (
    <div >
      <ProductCard updateBasketCount={updateBasketCount}
       
      />
    </div>
  );
};

export default Product;
