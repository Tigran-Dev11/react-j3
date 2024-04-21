import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEME } from "/src/validation";
import { routesHref } from "/src/utils/constants";
import Input from "/src/common/input";
import { IMAGES } from "/src/assets/images";
import Button from "./../../common/button/index";

const Footer = () => {
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.registerScheme),
  });
  const SendMail = (data) => {
    console.log(data);
    reset();
  };
  return (
    <S.FooterContainer>
      <S.FooterHeader>
        <S.Title>&#123;Finsweet</S.Title>
        <S.LinkContainer>
          <S.Link to={`/${lngKey}${routesHref.aboutUs}`}>
            {t("nav.aboutUs")}
          </S.Link>
          <S.Link to={`/${lngKey}${routesHref.contactUs}`}>
            {t("nav.contactUs")}
          </S.Link>
          <S.Link to={`/${lngKey}${routesHref.privacyPolicy}`}>
            {t("nav.privacyPolicy")}
          </S.Link>
        </S.LinkContainer>
      </S.FooterHeader>
      <S.SubscriberContainer>
        <S.SubscribeTitle>{t("footer.subscribeTitle")}</S.SubscribeTitle>
        <S.SubscribeForm onSubmit={handleSubmit(SendMail)}>
          <Input
            type="email"
            placeholder="Enter your email"
            variant="primary"
            register={register("email")}
            error={errors?.email?.message}
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
