import { useForm } from "react-hook-form";
import Button from "../../common/button";
import Input from "../../common/input/input";
import css from "./styled.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SCHEMAS } from "../validation";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMAS.loginScheme),
  });
const navigate = useNavigate()
  const onSubmit = ({ email, password }) => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (email === userInfo.email && password === userInfo.password) {
      navigate('/')
    }else{
      console.log('wrong');
    }
  };
  return (
    <div className={css.loginContainer}>
      <h1>Welcome to the website</h1>
      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Email"}
          type={"email"}
          error={errors?.email}
          variant="secondary"
          register={register("email")}
        />
        <Input
          placeholder={"Password"}
          type={"password"}
          variant="secondary"
          error={errors?.password}
          register={register("password")}
        />
        <Button title={"Log In"} variant='secondary' />
      </form>
    </div>
  );
};
export default Login;
