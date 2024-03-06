import css from "./styled.module.scss";
import Input from "../../common/input/input";
import Button from "../../common/button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { SCHEMAS } from "../validation/index";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMAS.registrScheme),
  });

  const onSubmit = (data) => {
  
    console.log(data);
    navigate('/login')
   
  };
  return (
    <div className={css.registrContainer}>
        <h1>Welcome</h1>
      <form className={css.registrForm} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={"LastName"} type={"text"} secondary />
        <p>{errors?.lastName?.message}</p>
        <Input placeholder={"FirstName"} type={"text"} secondary />
        <p>{errors?.firstName?.message}</p>
        <Input placeholder={"Email"} type={"email"} secondary />
        <p>{errors?.email?.message}</p>
        <Input placeholder={"Password"} type={"password"} secondary />
        <p>{errors?.password?.message}</p>
        <Input placeholder={"Confirm Password"} type={"password"} secondary />
        <p>{errors?.confirmPassword?.message}</p>
        <Input type={"checkbox"} id="checkbox" />
        <label htmlFor="checkbox">Accssept</label>
        <p>{errors?.isAccept?.message}</p>
        
        <Button title={"Registration"} secondary />
        
      </form>
    </div>
  );
};
export default Register;
