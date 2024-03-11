import css from "./registration.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SCHEMAS } from "../../validation";



const Registration = () => {
 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(SCHEMAS.registerSchema),
  });

const onSubmit = (data) => {

localStorage.setItem("user" , JSON.stringify(data)) 

navigate("/login");

}

  return (
    <div className={css.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={css.reg}>
        <input
          {...register("firstName")}
          type="text"
          placeholder="enter your name"
          className={css.input}
        />
        <p>{errors?.firstName?.message}</p>
        <input
          {...register("lastName")}
          type="text"
          placeholder="enter your last name"
          className={css.input}
        />
        <p>{errors?.lastName?.message}</p>
        <input
          {...register("email")}
          type="email"
          placeholder="enter your email "
          className={css.input}
        />
        <input
           {...register("password")}
          type="password"
          placeholder="enter your password"
          className={css.input}
        />
        <input
          {...register("confirmPassword")}   
          type="password"
          placeholder="confirm password"
          className={css.input}
        />
        <input type="checkbox" />
        <button className={css.submit}>submit</button>
      </form>
    </div>
  );
};

export default Registration;
