import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { prodId } = useParams();

  useEffect(() => {

    console.log(prodId);
  }, [prodId]);

  return <div>single Product</div>;
};

export default SingleProduct;
