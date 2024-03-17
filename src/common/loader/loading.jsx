import React from 'react';
import { IMAGES } from '../../assets/images';
import css from './loading.module.scss'
const Loading = () => {
    return (
        <div className={css.loader}> 
            <img src={IMAGES.loading} alt="loading" />
        </div>
    );
}

export default Loading;
