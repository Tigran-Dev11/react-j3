import React from 'react';

import { UseFetch } from '../../hooks/use-Fetch';

const ProductItem = ({ item }) => {
  const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json/"
  const { data, loading, error } = UseFetch(apiUrl); 

  console.log(data);
  if (!item) {
    return <div>Item is undefined</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map(product => (
            <li key={product.id}>{product.name}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductItem;
