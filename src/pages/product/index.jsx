import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "../../common/loader";
import css from "./product.module.scss";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [number, setNumber] = useState(0);

  // const [title, setTitle] = useState('Title-1')

  // const increment = () => {
  //   setNumber(number + 1);
  // };

  // //component did mount
  // useEffect(() => {
  //   console.log("render");
  // },[]);

  //component did update
  // useEffect(() => {
  //   console.log("render");
  // },[number,title]);

  //componet will unmount
  // useEffect(()=>{

  //   return ()=>{
  //       console.log('component deleted');
  //   }

  // },[])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/products");

        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  console.log(product);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <NavLink to={ROUTES.home}>Home</NavLink>
      {/* <br />
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={()=>{
        setTitle('Title -2')
      }}>change title</button>
      <br />
      <br />
      <p>{number}</p>
      <br />
      <br />
      <h2>{title}</h2> */}
      <div className={css.productContainer}>
        {product.map((item) => (
          <div key={item.id} className={css.productItem}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
