import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { authors } from "../home/data";
import AuthorCard from "../../../compoents/author-card";
import Join from "../../../compoents/join";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <S.AboutContainer>
      <S.AboutHeaderContainer>
        <S.AboutHeader></S.AboutHeader>
        <S.AboutHeaderInfo>
          <S.AboutHeaderTitle>{t("nav.aboutUs")}</S.AboutHeaderTitle>
          <S.AboutHeaderSubTitle>{t("aboutUs.subTitle")}</S.AboutHeaderSubTitle>
        </S.AboutHeaderInfo>
      </S.AboutHeaderContainer>
      <S.AboutHeaderBottomContainer>
        <S.AboutHeaderBottomLeft>
          <S.AboutHeaderTitle>{t("btn.ourMision")}</S.AboutHeaderTitle>
          <S.AboutHeaderSubTitle>
            {t("aboutUs.mission.description")}
          </S.AboutHeaderSubTitle>
          <S.AboutHeaderInformation>
            {t("contactUs.description")}
          </S.AboutHeaderInformation>
        </S.AboutHeaderBottomLeft>
        <S.AboutHeaderBottomRight>
          <S.AboutHeaderTitle>{t("aboutUs.vision.title")}</S.AboutHeaderTitle>
          <S.AboutHeaderSubTitle>
            {t("aboutUs.vision.description")}
          </S.AboutHeaderSubTitle>
          <S.AboutHeaderInformation>
            {t("contactUs.description")}
          </S.AboutHeaderInformation>
        </S.AboutHeaderBottomRight>
      </S.AboutHeaderBottomContainer>
      <S.AboutPostContainer>
        <S.AboutPostSection>
          <S.AboutPostContainerLeft>
            <S.AboutHeaderTitle>{t("aboutUs.post.title")}</S.AboutHeaderTitle>
            <S.AboutHeaderSubTitle>
              {t("contactUs.description")}
            </S.AboutHeaderSubTitle>
            <S.AboutHeaderInformation>
              {t("contactUs.description")}
            </S.AboutHeaderInformation>
          </S.AboutPostContainerLeft>
          <S.AboutPostContainerRight></S.AboutPostContainerRight>
        </S.AboutPostSection>
        <S.AboutPostSection>
          <S.AboutPostContainerRightBottom></S.AboutPostContainerRightBottom>
          <S.AboutPostContainerLeftBottom>
            <S.AboutHeaderTitle>{t("aboutUs.post.blog")}</S.AboutHeaderTitle>
            <S.AboutHeaderSubTitle>
              {t("contactUs.description")}
            </S.AboutHeaderSubTitle>
            <S.AboutHeaderInformation>
              {t("contactUs.description")}
            </S.AboutHeaderInformation>
          </S.AboutPostContainerLeftBottom>
        </S.AboutPostSection>
      </S.AboutPostContainer>
      <S.AuthorsContainer>
        {authors(t)?.map((item) => {
          return <AuthorCard key={item.id} item={item} />;
        })}
      </S.AuthorsContainer>
      <Join />
    </S.AboutContainer>
  );
};

export default AboutUs;
