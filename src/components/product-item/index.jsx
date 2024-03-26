import React from "react";

import { UseFetch } from "../../hooks/use-Fetch";

const ProductItem = () => {
  console.log("render");

  const apiUrl = "/products.json";
  const [data, loading, error] = UseFetch({ url: apiUrl });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductItem;
