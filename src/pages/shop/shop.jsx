import React from 'react';
import css from './shop.module.scss'
import Product from '../../product/product';
const Shop = () => {
    return (
        <div className={css.shopContainer}>
            <Product/>
        </div>
    );
}

export default Shop;
