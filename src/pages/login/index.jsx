// //  import "./Login.css"
// import { NavLink } from "react-router-dom";
// import React from "react";
// const login=()=>{
//    return(
//       <NavLink>
// <div className="contaner">
//    <div className="header">
//   <div className="text">Sign Up</div>
//   <div className="underline"></div>
//   <div className="inputs">
//    <div className="input">
//       <img src={user_icon} alt=""/>
//       <input  type="text"/>
//    </div>
//    <div className="inputs">
//    <div className="input">
//       <img src={email_icon}alt=""/>
//       <input  type="email"/>
//    </div>
//    <div className="inputs">
//    <div className="input">
//       <img src={password_icon}alt=""/>
//       <input  type="password"/>
//    </div>
//   </div>

// </div>
// </div>
//    </div>
// </div>
// </NavLink>

//    )
// }

// export default login;


import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Login = () => {

    const navigate = useNavigate();
    const {
    loginr,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SCHEMAS.loginSchema)
  });
  const onSubmit = (data) => {
       const {email,password } =data;
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <form className={css.loginrForm} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="last name" {...login("firstName")}/>
         <p>{errors?.firstName?.message}</p>
        <input type="text" placeholder="first name" {...login("lastName")}/>
        <p>{errors?.lastName?.message}</p>
        <input type="email" placeholder="email" {...login("email")}/>
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="password" {...login("password")}/>
        <p>{errors?.password?.message}</p>
        <input type="password" placeholder="copy password"  {...login("passwordConfirmation")}/>
        <p>{errors?.passwordConfirmation?.message}</p>
        <input type="checkbox" id="checkbox" {...login("isAccept")}/>
        <label htmlFor="checkbox">Accepted privacy policy</label>
        <p>{errors?.isAccept?.message}</p>
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;