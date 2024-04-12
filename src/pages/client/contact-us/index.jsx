import { useTranslation } from "react-i18next";
import * as S from "./styled";
import Input from "../../../common/input";
import Button from "../../../common/button/index";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderSubtitle>{t("contactUs.subtitle")}</S.HeaderSubtitle>
        <S.HeaderTitle>{t("contactUs.title")}</S.HeaderTitle>
        <S.HeaderDescription>{t("contactUs.description")}</S.HeaderDescription>
      </S.HeaderContainer>
      <S.AboutWorking>
        <S.AboutWorkingLeft>
          <S.AboutWorkingTitle>
            {t("contactUs.about.title")}
          </S.AboutWorkingTitle>
          <S.AboutWorkingSubtitle>
            {t("contactUs.about.subtitle")}
          </S.AboutWorkingSubtitle>
          <S.AboutWorkingDescription>
            {t("contactUs.about.description")}
          </S.AboutWorkingDescription>
        </S.AboutWorkingLeft>
        <S.AboutWorkingRight>
          <S.AboutWorkingTitle>
            {t("contactUs.about.contactUs.title")}
          </S.AboutWorkingTitle>
          <S.AboutWorkingSubtitle>
            {t("contactUs.about.contactUs.subtitle")}
          </S.AboutWorkingSubtitle>
          <S.AboutWorkingDescription>
            {t("contactUs.about.contactUs.description")}
          </S.AboutWorkingDescription>
        </S.AboutWorkingRight>
      </S.AboutWorking>
      <S.FormContainer>
        <Input type="text" variant="secondary" placeholder={"Name"} />
        <Input type="email  " variant="secondary" placeholder={"Email"} />
        <Input type="text" variant="secondary" placeholder={"Query Related"} />
        <S.TextArea placeholder="Message"></S.TextArea>
        <Button title={t("btn.sendMessage")} variant />
      </S.FormContainer>
    </S.Container>
  );
};

export default ContactUs;
