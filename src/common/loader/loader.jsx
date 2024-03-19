import React from 'react';
import { IMAGES } from '../../assets/images';
import css from './loading.module.scss'
const Loader = () => {
    return (
        <div className={css.loader}> 
            <img src={IMAGES.loading} alt="loading" />
        </div>
    );
}

export default Loader;
