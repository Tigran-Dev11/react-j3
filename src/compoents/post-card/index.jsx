
import { useTranslation } from 'react-i18next';
import { posts } from './../../pages/home/post';
import * as S from "./styled"

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
