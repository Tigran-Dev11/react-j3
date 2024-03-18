import React from "react";
import css from "./registr.module.scss";
import Button from "../../common/button";
import Input from "../../common/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEME } from "../validation";
import { useNavigate } from "react-router";

const Registr = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEME.registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };
  return (
    <div className={css.registrContainer}>
      <form className={css.registrForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          variant="secondary"
          type="text"
          placeholder={"First Name"}
          error={errors?.firstName}
          register={register("firstName")}
        />
        <Input
          variant="secondary"
          type="text"
          placeholder={"Last Name"}
          error={errors?.lastName}
          register={register("lastName")}
        />
        <Input
          variant="secondary"
          type="email"
          placeholder={"Email"}
          error={errors?.email}
          register={register("email")}
        />
        <Input
          variant="secondary"
          type="password"
          placeholder={"Password"}
          error={errors?.password}
          register={register("password")}
        />
        <Input
          variant="secondary"
          type="password"
          placeholder={"Confirm Password"}
          error={errors?.confirmPassword}
          register={register("confirmPassword")}
        />
        <Input
          type="checkbox"
          id="checkbox"
          register={register("checkbox")}
          error={errors?.isAccept}
        />
        <label htmlFor="checkbox"> Please Accssept</label>
        <Button title={"Create Account"} variant="primary" />
      </form>
    </div>
  );
};

export default Registr;
