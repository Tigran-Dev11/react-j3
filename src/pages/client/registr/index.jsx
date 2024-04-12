import { useForm } from "react-hook-form";
import { SCHEME } from "../../../validation";
import * as S from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../common/button";
import { useTranslation } from "react-i18next";
import Input from "../../../common/input";
const Registr = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SCHEME.registerScheme)
  });

  //   const onSubmit = (data) => {
  //     console.log(data);

  //   };
  return (
    <S.RegistrContainer>
      <S.RegisterForm>
        <Button title={t("btn.createAccount")} variant="primary" />
      </S.RegisterForm>

      <Input
        type="text"
        placeholder={" First Name"}
        register={register}
        variant="secondary"
        error={errors.firstName}
      />
      <Input
        variant="secondary"
        type="text"
        placeholder={"Last Name"}
        error={errors?.lastName}
        register={register}
      />
      <Input
        variant="secondary"
        type="email"
        placeholder={"Email"}
        error={errors?.email}
        register={register}
      />
      <Input
        variant="secondary"
        type="password"
        placeholder={"Password"}
        error={errors?.password}
        register={register}
      />
      <Input
        variant="secondary"
        type="password"
        placeholder={"Confirm Password"}
        error={errors?.confirmPassword?.message}
        register={register}
      />
       <Input
        type="checkbox"
        id="checkbox"
        register={register}
        error={errors?.isAccept}
      />
      <label htmlFor="checkbox"> Please Accssept</label>
    </S.RegistrContainer>
  );
};

export default Registr;
