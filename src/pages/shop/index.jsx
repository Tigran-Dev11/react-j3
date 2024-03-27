import React from 'react';
import ProductItem from '../../components/product-item';
import { UseFetch } from '../../hooks/use-Fetch';
import * as S from "./styled"

const Shop = () => {
   const apiUrl = "/products.json?product_type=blush&product_category=cream";
  const [data, loading, error] = UseFetch({ url: apiUrl });

  if (loading) {
      return <div>loading</div>;
    }
    return (
        <S.ShopContainer>
        {data?.map((item)=>(
            <ProductItem item={item} key={item.id}/>
        ))}
    </S.ShopContainer>
    );
}

export default Shop;
