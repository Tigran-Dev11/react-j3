import { useTranslation } from "react-i18next";
import { IMAGES } from "../../assets/images";
import { COLORS } from "../../assets/style/color";
import Button from "../../common/button";
import Product from "../product";
import * as S from "./styled";

const Home = () => {
  const {t} = useTranslation()
  return (
    <S.HomeContainer>
      <S.HeaderContainer>
        <S.ContainerLeft>
          <S.HeaderTitle>
           {t("header.title")}
          </S.HeaderTitle>
          <S.Paragraph>{t("header.paragraph")}</S.Paragraph>
          <S.ButtonLine>
            <Button>{t("header.button")}</Button>
          </S.ButtonLine>
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.containerRightBackground></S.containerRightBackground>
        </S.ContainerRight>
      </S.HeaderContainer>
      <S.CollectionContainer>
        <S.CollectionTitle>
         {t("header.collectionTitle")}
        </S.CollectionTitle>
        <S.CollectionImage
          src={IMAGES.collactionSkinIMages}
        ></S.CollectionImage>

        <Button border={COLORS.blueViolet} color={COLORS.black}>
          {t("header.button")}
        </Button>
      </S.CollectionContainer>

      <Product />

      <S.informationContainer>
        <S.informationContainerBackground>
          <S.Background></S.Background>
        </S.informationContainerBackground>
        <S.InformationAboutProd>
          <S.InformationTitle>{t("header.informationTitle")}</S.InformationTitle>
          <S.InformationContainer>
            <S.inforParagraphy>
             {t("header.informationParagraph")}
            </S.inforParagraphy>
            <S.InfoButtons>
              <Button border={COLORS.blueViolet} color={COLORS.blueViolet}>
                {t("header.btnLearn")}
              </Button>
              <Button background={COLORS.blueViolet} color={COLORS.white}>
               {t("header.btnBuy")}
              </Button>
            </S.InfoButtons>
          </S.InformationContainer>
        </S.InformationAboutProd>
      </S.informationContainer>
    </S.HomeContainer>
  );
};
export default Home;
