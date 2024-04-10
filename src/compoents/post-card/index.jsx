
import { posts } from './../../pages/home/post';
import * as S from "./styled"

const PostCard = () => {
return(
    <>
    {posts.map(post =>{
        return(
            <S.PostCardContainer key={post.id}>
                <S.PostAuthor>{post.date}</S.PostAuthor>
                <S.PostInformation>{post.description}</S.PostInformation>
            </S.PostCardContainer>
        )
       })}
       </>
)
  
   
}

export default PostCard;
