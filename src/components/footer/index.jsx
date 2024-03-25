import React from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const {t}= useTranslation()
  return (
    <S.Footer>
      <S.Title>Skin Bliss.</S.Title>
      <S.MenuContainer>
        <S.Ul>
          {t("footer.products")}
          <S.Navlink>{t("footer.skincare")}</S.Navlink>
          <S.Navlink>{t("footer.woman")}</S.Navlink>
          <S.Navlink>{t("footer.newIn")}</S.Navlink>
          <S.Navlink>{t("footer.weeklyPick")}</S.Navlink>
        </S.Ul>
        <S.Ul>
          {t("footer.blog")}
          <S.Navlink>{t("footer.dermatologistRecs")}</S.Navlink>
        </S.Ul>
        <S.Ul>
      {t(" footer.companyInfo")}
          <S.Navlink>{t("footer.aboutUs")}</S.Navlink>
          <S.Navlink>{t("footer.contactUs")}</S.Navlink>
          <S.Navlink>{t("footer.paymentOptions")}</S.Navlink>
          <S.Navlink>{t("footer.trackOrder")}</S.Navlink>
          <S.Navlink>{t("footer.support")}</S.Navlink>
        </S.Ul>
        <S.Ul>{t("footer.follow")}
            <S.Navlink ><S.Img src={IMAGES.instagramImg}></S.Img></S.Navlink>
            <S.Navlink><S.Img src={IMAGES.facebookImg}></S.Img></S.Navlink>
            <S.Navlink><S.Img src={IMAGES.youtubeImg}></S.Img></S.Navlink>
        </S.Ul>
      </S.MenuContainer>
    </S.Footer>
  );
};

export default Footer;
