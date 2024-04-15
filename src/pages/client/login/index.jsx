import { useTranslation } from "react-i18next";
import Button from "../../../common/button";
import Input from "../../../common/input";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEME } from "../../../validation";

const Login = () => {
  const { t } = useTranslation();
  const {
    login,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.loginScheme),
  });

  const loginToAccount = (data) => {
    console.log(data);
  };
  return (
    <S.LoginContainer>
      <S.LoginForm onSubmit={handleSubmit(loginToAccount)}>
        <Input
          type={"email"}
          variant="secondary"
          placeholder={"Email"}
          login={login("email")}
          error={errors?.email?.message}
        />
        <Input
          type={"password"}
          variant="secondary"
          placeholder={"Password"}
          login={login("password")}
          error={errors?.password?.message}
        />
        <Button variant="primary" title={t("btn.signIn")} />
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
