
import { useTranslation } from 'react-i18next';

import * as S from "./styled"
import { posts } from './../../pages/client/home/post';

const PostCard = () => {
    const { t } = useTranslation();
return(
    <>
    {posts(t)?.map(({id, date, description}) =>{
        return(
            <S.PostCardContainer key={id}>
                <S.PostAuthor>{date}</S.PostAuthor>
                <S.PostInformation>{description}</S.PostInformation>
            </S.PostCardContainer>
        )
       
        })}
       </>
)
  
   
}

export default PostCard;
