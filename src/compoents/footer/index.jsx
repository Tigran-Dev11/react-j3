import { useTranslation } from "react-i18next";
import { routesHref } from "../../utils/constants";
import * as S from "./styled";
import Input from "../../common/input";
import Button from "../../common/button";
import { IMAGES } from "../../assets/images";
const Footer = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  return (
    <S.FooterContainer>
      <S.FooterHeader>
        <S.Title>
          <S.Link to={`/${lngKey}${routesHref.home}`}> &#123;Finsweet</S.Link>
        </S.Title>
        <S.LinkContainer>
          <S.Link to={`/${lngKey}${routesHref.home}`}>{t("nav.home")}</S.Link>
          <S.Link to={`/${lngKey}${routesHref.blog}`}>{t("nav.blog")}</S.Link>
          <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
            {t("nav.aboutUs")}
          </S.Link>
          <S.Link to={`/${lngKey}${routesHref.contactUs}`}>
            {t("nav.contactUs")}
          </S.Link>
        </S.LinkContainer>
      </S.FooterHeader>
      <S.SubscriberContainer>
        <S.SubscribeTitle>{t("footer.subscribeTitle")}</S.SubscribeTitle>
        <S.SubscribeForm>
          <Input
            type="email"
            placeholder="Enter your email"
            variant="primary"
          />
          <Button title={t("btn.subscribe")} variant="primary" />
        </S.SubscribeForm>
      </S.SubscriberContainer>
      <S.FooterInformation>
        <S.InfoTitle>{t("footer.infoTitle")}</S.InfoTitle>
        <S.FooterIcons>
          <S.Icon src={IMAGES.facebookIcon} alt="facebook-icon"></S.Icon>
          <S.Icon src={IMAGES.twitterIcon} alt="twitter-icon"></S.Icon>
          <S.Icon src={IMAGES.instagramIcon} alt="instagram-icon"></S.Icon>
          <S.Icon src={IMAGES.linkdinIcon} alt="linkdin-icon"></S.Icon>
        </S.FooterIcons>
      </S.FooterInformation>
    </S.FooterContainer>
  );
};

export default Footer;
