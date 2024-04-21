import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEME } from "/src/validation";
import Input from "/src/common/input";
import Button from "/src/common/button";

const ContactUs = () => {
  const { t } = useTranslation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.messageScheme),
  });

  const SendMessage = (data) => {
    localStorage.setItem("Message", JSON.stringify(data));
    reset();
  };

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
      <S.FormContainer onSubmit={handleSubmit(SendMessage)}>
        <Input
          type="text"
          variant="secondary"
          placeholder={"Name"}
          error={errors?.name?.message}
          register={register("name")}
        />
        <Input
          type="email"
          variant="secondary"
          placeholder={"Email"}
          error={errors?.email?.message}
          register={register("email")}
        />
        <Input
          type="text"
          variant="secondary"
          placeholder={"Query Related"}
          error={errors?.text?.message}
          register={register("text")}
        />
        <S.TextArea placeholder="Message"></S.TextArea>
        <Button title={t("btn.sendMessage")} variant="primary" />
      </S.FormContainer>
    </S.Container>
  );
};

export default ContactUs;
