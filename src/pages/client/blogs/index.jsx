import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Button from "/src/common/button/index";
import { blogs } from "./blog";
import BlogCard from "/src/compoents/blog-cards";
import { category } from "../home/data";
import Join from "/src/compoents/join";
import CategoryCard from "/src/compoents/category-card";
import { routesHref } from "/src/utils/constants";

const Blog = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  return (
    <S.BlogContainer>
      <S.HeaderContainer>
        <S.HeaderContainerLeft>
          <S.HeaderTitle>{t("home.post.title")}</S.HeaderTitle>
          <S.HeaderSubtitle>{t("home.subTitle")}</S.HeaderSubtitle>
          <S.AuthorsName>{t("home.post.authorInfo")}</S.AuthorsName>
          <S.Description>{t("home.post.information")}</S.Description>
          <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
            {" "}
            <Button title={t("btn.readMore")} variant="primary" />
          </S.Link>
        </S.HeaderContainerLeft>
        <S.HeaderContainerRight></S.HeaderContainerRight>
      </S.HeaderContainer>
      <S.BlogPostsContainer>
        <S.BlogPostsTitle>{t("home.post.allTitle")}</S.BlogPostsTitle>
        <S.BlogCardContainer>
          {blogs(t).map((item) => {
            return <BlogCard key={item.id} item={item} />;
          })}
        </S.BlogCardContainer>
      </S.BlogPostsContainer>

      <S.AboutDescriptions>{t("home.category.title")}</S.AboutDescriptions>
      <S.CategorySection>
        {category(t).map((item) => {
          return <CategoryCard key={item.id} item={item} />;
        })}
      </S.CategorySection>
      <Join />
    </S.BlogContainer>
  );
};

export default Blog;
