import { useForm } from "react-hook-form";

import * as S from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { routesHref } from "/src/utils/constants";
import { SCHEME } from "/src/validation";
import Input from "/src/common/input";
import Button from "/src/common/button/index";

const Registr = () => {
  
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.registerScheme),
  });

  const saveUser = (data) => {
    localStorage.setItem("registrData", JSON.stringify(data));
    reset();
    navigate(`/${lngKey}${routesHref.login}`);
  };

  return (
    <S.RegistrContainer>
      <S.RegistrTitle>{t("registr.title")}</S.RegistrTitle>
      <S.RegisterForm onSubmit={handleSubmit(saveUser)}>
        <Input
          type="text"
          placeholder={"First Name"}
          register={register("firstName")}
          variant="secondary"
          error={errors?.firstName?.message}
        />
        <Input
          variant="secondary"
          type="text"
          placeholder={"Last Name"}
          error={errors?.lastName?.message}
          register={register("lastName")}
        />
        <Input
          variant="secondary"
          type="email"
          placeholder={"Email"}
          error={errors?.email?.message}
          register={register("email")}
        />
        <Input
          variant="secondary"
          type="password"
          placeholder={"Password"}
          error={errors?.password?.message}
          register={register("password")}
        />
        <Input
          variant="secondary"
          type="password"
          placeholder={"Confirm Password"}
          error={errors?.confirmPassword?.message}
          register={register("confirmPassword")}
        />
        <Input
          type="checkbox"
          id="checkbox"
          register={register("isAccept")}
          error={errors?.isAccept?.message}
        />
        <label htmlFor="checkbox"> Please Accssept</label>
        <Button title={t("btn.createAccount")} variant="primary" />
        <S.Link to={`/${lngKey}${routesHref.login}`}>{t("btn.signIn")}</S.Link>
      </S.RegisterForm>
    </S.RegistrContainer>
  );
};

export default Registr;
