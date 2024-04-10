import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Button from "../../common/button";
import PostCard from "../../compoents/post-card";

const Home = () => {
  const { t } = useTranslation();
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.HomeHeaderContainer>
          <S.Title>{t("home.title")}</S.Title>
          <S.SubTitle>{t("home.subTitle")}</S.SubTitle>
          <S.AuthorInfo>{t("home.authorInfo")}</S.AuthorInfo>
          <S.Information>{t("home.information")}</S.Information>
          <Button title={t("btn.readMore")} variant="primary" />
        </S.HomeHeaderContainer>
      </S.HomeHeader>
      <S.PostContainer>
        <S.PostLeftContainer>
          <S.PostTitel>{t("home.post.title")}</S.PostTitel>
          <S.PostBackground></S.PostBackground>
          <S.PostAuthor>{t("home.post.authorInfo")}</S.PostAuthor>
          <S.PostInfoContainer>
            <S.PostInformation>{t("home.post.information")}</S.PostInformation>
            <S.postDescription>{t("home.post.description")}</S.postDescription>
            <Button title={t("btn.readMore")} variant="primary" />
          </S.PostInfoContainer>
        </S.PostLeftContainer>
        <S.PostRightContainer>
          <S.PostRightTitel>{t("home.post.allTitle")}</S.PostRightTitel>
          <PostCard/>
        </S.PostRightContainer>
      </S.PostContainer>
    </S.HomeContainer>
  );
};
export default Home;
