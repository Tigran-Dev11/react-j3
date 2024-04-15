/* eslint-disable react/prop-types */


import * as S from "./styled";
const BlogCard = ({item}) => {

    return (
        <S.CardItems key={item.id}   >
            <S.CardImg src={item.img} alt={item.title}></S.CardImg>
            <S.CardInfoContainer>
                <S.CardCategory>{item.title}</S.CardCategory>
                <S.CardTitle>{item.subTitle}</S.CardTitle>
                <S.CardSubtitle>{item.description}</S.CardSubtitle>
                
            </S.CardInfoContainer>
        </S.CardItems>
    );
}

export default BlogCard;
