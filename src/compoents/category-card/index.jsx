import { useTranslation } from "react-i18next";

import * as S from "./styled"
import { category } from './../../pages/client/home/category';

const CategoryCard = () => {
    const {t}= useTranslation()
    return (
       <>
        {category(t).map(({id, img,title, description})=>{
            return(
          
                <S.CategoryCardContainer key={id} >
                    <S.CategoryCardImg src={img} alt={title}/>
                    <S.CategoryCardContent>
                        <S.CategoryCardTitle>{title}</S.CategoryCardTitle>
                        <S.CategoryCardDescription>{description}</S.CategoryCardDescription>
                    </S.CategoryCardContent>
                </S.CategoryCardContainer>
        
            )
        })}
        
</>
            
      
    );
}

export default CategoryCard;
