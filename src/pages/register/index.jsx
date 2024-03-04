import css from "./styled.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMAS } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Register = () => {

    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SCHEMAS.registerSchema)
  });
  const onSubmit = (data) => {
       const {email,password } =data;
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="last name" {...register("firstName")}/>
         <p>{errors?.firstName?.message}</p>
        <input type="text" placeholder="first name" {...register("lastName")}/>
        <p>{errors?.lastName?.message}</p>
        <input type="email" placeholder="email" {...register("email")}/>
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="password" {...register("password")}/>
        <p>{errors?.password?.message}</p>
        <input type="password" placeholder="copy password"  {...register("passwordConfirmation")}/>
        <p>{errors?.passwordConfirmation?.message}</p>
        <input type="checkbox" id="checkbox" {...register("isAccept")}/>
        <label htmlFor="checkbox">Accepted privacy policy</label>
        <p>{errors?.isAccept?.message}</p>
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;



// const Input =({register})=>{


//     return(
//         <input {...register}/>
//     )
// }
