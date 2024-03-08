import { useNavigate } from "react-router-dom";
import "./login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../validation";
import css from "./login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMAS.loginSchema),
  });
  const onSubmit = ({ email, password }) => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (email === userInfo.email && password === userInfo.password) {
      navigate("/");
    } else {
      alert("wrong password or email");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <button className="submit"> Submit </button>
    </form>
  );
};

export default Login;
