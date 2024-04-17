import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Button from '/src/common/button/index';
import { routesHref } from "/src/utils/constants";
import { category, posts } from "./data";
import PostCard from '/src/compoents/post-card/index';
import SliderLogos from '/src/compoents/slider/logos-slider/index';
import Join from "/src/compoents/join";
import CategoryCard from "/src/compoents/category-card";
import SilderAuthors from "../../../compoents/slider/authors-slider";

const Home = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.HomeHeaderContainer>
          <S.Title>{t("home.title")}</S.Title>
          <S.SubTitle>{t("home.subTitle")}</S.SubTitle>
          <S.AuthorInfo>{t("home.authorInfo")}</S.AuthorInfo>
          <S.Information>{t("home.information")}</S.Information>
          <S.Link to={`/${lngKey}${routesHref.blog}`}>
            <Button title={t("btn.readMore")} variant="primary" />
          </S.Link>
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
            <S.Link to={`/${lngKey}${routesHref.blog}`}>
              <Button title={t("btn.readMore")} variant="primary" />
            </S.Link>
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
            <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
              {t("btn.learnMore")}
            </S.Link>
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
          <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
            {" "}
            <Button title={t("btn.discoverOurStory")} variant="primary" />
          </S.Link>
        </S.StartUpContainerRight>
      </S.StartUpContainer>
      <S.AuthorContainer>
        <S.AboutDescriptions>{t("authors.title")}</S.AboutDescriptions>
        <S.AuthorSection>
  <SilderAuthors/>
        </S.AuthorSection>
      </S.AuthorContainer>
      <S.LogoContainer>
        <SliderLogos />
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
