/* eslint-disable no-undef */
import { useTranslation } from "react-i18next";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Input from "/src/common/input";
import Button from "/src/common/button";
import { SCHEME } from "/src/validation";
import { adminRoutesHref } from '/src/utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lngKey = localStorage.getItem("i18nextLng") ?? "arm";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.loginScheme),
  });

  const handleLogin = (data) => {
    const savedLogin = import.meta.env.VITE_LOGIN;
    const savedPassword = import.meta.env.VITE_PASSWORD;

    if (data.email === savedLogin && data.password === savedPassword) {
      navigate(`/${lngKey}${adminRoutesHref.dashboard}`);
      console.log("admin");
    } else {
      navigate("/");
      console.log("home");
    }
  };

  return (
    <S.LoginContainer>
      <S.LoginTitle>{t("btn.signIn")}</S.LoginTitle>
      <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
        <Input
          type={"email"}
          variant="secondary"
          placeholder={"Email"}
          register={register("email")}
          error={errors?.email?.message}
        />
        <Input
          type={"password"}
          variant="secondary"
          placeholder={"Password"}
          register={register("password")}
          error={errors?.password?.message}
        />
        <Button variant="primary" title={t("btn.signIn")} />
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
