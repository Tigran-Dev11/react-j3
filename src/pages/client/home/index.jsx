import { useTranslation } from "react-i18next";
import * as S from "./styled";
import PostCard from "../../../compoents/post-card";
import CategoryCard from "../../../compoents/category-card";
import Button from "../../../common/button";
import Join from "./../../../compoents/join/index";
import { category } from "./category";
import { posts } from "./post";
import SilderAuthors from "../../../compoents/slider/authors-slider";
import SliderLogos from './../../../compoents/slider/logos-slider/index';



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
            <S.PostDescription>{t("home.post.description")}</S.PostDescription>
            <Button title={t("btn.readMore")} variant="primary" />
          </S.PostInfoContainer>
        </S.PostLeftContainer>
        <S.PostRightContainer>
          <S.PostRightTitel>{t("home.post.allTitle")}</S.PostRightTitel>
          {posts(t)?.map((item) => {
            return <PostCard key={item.id} item={item} />;
          })}
        </S.PostRightContainer>
      </S.PostContainer>
      <S.AboutContainer>
        <S.ColorsLine>
          <S.ColorsLineLeft></S.ColorsLineLeft>
          <S.ColorsLineRight></S.ColorsLineRight>
        </S.ColorsLine>
        <S.AboutSection>
          <S.AboutSectionLeft>
            <S.AboutTitles>{t("nav.aboutUs")}</S.AboutTitles>
            <S.AboutDescriptions>
              {t("home.posts.aboutUsDescription")}
            </S.AboutDescriptions>
            <S.AboutText>{t("home.post.information")}</S.AboutText>
            <S.Link>{t("btn.learnMore")} &#62;</S.Link>
          </S.AboutSectionLeft>
          <S.AboutSectionRight>
            <S.AboutTitles>{t("btn.ourMision")}</S.AboutTitles>
            <S.AboutDescriptions>
              {t("home.posts.ourMisisonDescription")}
            </S.AboutDescriptions>
            <S.AboutText>{t("home.posts.lorem")}</S.AboutText>
          </S.AboutSectionRight>
        </S.AboutSection>
      </S.AboutContainer>
      <S.CategoriContainer>
        <S.AboutDescriptions>{t("home.category.title")}</S.AboutDescriptions>
        <S.CategorySection>
          {category(t).map((item) => {
            return <CategoryCard key={item.id} item={item} />;
          })}
        </S.CategorySection>
      </S.CategoriContainer>
      <S.StartUpContainer>
        <S.StartUpContainerLeft></S.StartUpContainerLeft>
        <S.StartUpContainerRight>
          <S.AboutTitles>{t("home.startUp.title")}</S.AboutTitles>
          <S.AboutDescriptions>
            {t("home.startUp.description")}
          </S.AboutDescriptions>
          <S.PostDescription>{t("home.posts.lorem")}</S.PostDescription>
          <Button title={t("btn.discoverOurStory")} variant="primary" />
        </S.StartUpContainerRight>
      </S.StartUpContainer>
      <S.AuthorContainer>
        <S.AboutDescriptions>{t("home.category.title")}</S.AboutDescriptions>
        <S.AuthorSection>
        <SilderAuthors/>
        </S.AuthorSection>
      </S.AuthorContainer>
      <S.LogoContainer>
        <SliderLogos/>
      </S.LogoContainer>
      <S.BlogContainer>
        <S.BlogContainerLeft>
          <S.AboutTitles>{t("home.blog.title")}</S.AboutTitles>
          <S.AboutDescriptions>
            {t("home.blog.description")}
          </S.AboutDescriptions>
          <S.AboutBlog>{t("home.blog.lorem")}</S.AboutBlog>
        </S.BlogContainerLeft>
        <S.BlogContainerRight>
          <S.BlogAbout>{t("home.blog.about")}</S.BlogAbout>
        </S.BlogContainerRight>
      </S.BlogContainer>
      <Join />
    </S.HomeContainer>
  );
};
export default Home;
