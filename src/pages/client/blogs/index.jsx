import Button from "../../../common/button";
import CategoryCard from "../../../compoents/category-card";
import Join from "../../../compoents/join";
import { category } from "../home/category";
import { blogs } from "./blog";

import * as S from "./styled";
import { useTranslation } from "react-i18next";
import BlogCard from "./../../../compoents/blog-cards/index";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <S.BlogContainer>
      <S.HeaderContainer>
        <S.HeaderContainerLeft>
          <S.HeaderTitle>{t("home.post.title")}</S.HeaderTitle>
          <S.HeaderSubtitle>{t("home.subTitle")}</S.HeaderSubtitle>
          <S.AuthorsName>{t("home.post.authorInfo")}</S.AuthorsName>
          <S.Description>{t("home.post.information")}</S.Description>
          <Button title={t("btn.readMore")} variant="primary" />
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
