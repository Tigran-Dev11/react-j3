import React from 'react';
import css from './shop.module.scss'
import { UseFetch } from '../../hooks/use-fetch';
import { API } from '../../config/api';
import { ProductCard } from '../../components/product-card/productCard';
import Loader from '../../common/loader/loader';

const Shop = () => {
    const [data, loading]=UseFetch({url:`${API.productTwo}`})
   

    if(loading){
        return <Loader/>
    }
    

    return (
        <div className={css.container}>
            {data?.map((item)=>(
                <ProductCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Shop;
