import React from 'react';
import css from './slider.module.scss'
import { Post } from '../../utils/slider';
import Button from '../../common/button';

const SliderPost = () => {
    return (
        <div className={css.posterContainer} >
            {Post.map((slide)=>(
                <div key={slide.id} className={css.poster}>
                    <img src={slide.img} alt='sliderPhoto' />
                    <Button title={'Quick view'} variant='secondary'/>
                    <p>{slide.price}</p>
                </div>
           ) )}
        </div>
    );
}
export default SliderPost;
