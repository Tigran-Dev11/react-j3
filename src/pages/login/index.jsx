import Button from "../../common/button";
import Input from "../../common/input/input";
import css from "./styled.module.scss";

const Login = () => {
    
  return (
    <div className={css.loginContainer}>
      <h1>Welcome to the website</h1>
      <form className={css.loginForm}>
        <Input placeholder={"Email"} type={"email"} secondary />
        <Input placeholder={"Password"} type={"password"} secondary />
        <Button title={"Log In"} secondary />
      </form>
    </div>
  );
};
export default Login;
