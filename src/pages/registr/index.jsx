
import React from 'react'
import css from './login.module.css'
const Login =()=>{
  return(
<div className={css.container}>
  <input type="checkbox" id="register_toggle"/>
  <div className={css.slider}>
    <form className={css.form}>
      <span className={css.title}>Login</span>
      <div className={css.form_control}>
        <input type="text" className={css.input} required=""/>
        <label className={css.label}>Username</label>
      </div>
      <div className={css.form_control}>
        <input type="password" className={css.input} required=""/>
        <label className={css.label}>Password</label>
      </div>
      <button>Login</button>

      <span className={css.bottom_text}>Don't have an account? <label for="register_toggle" className={css.swtich}>Sign Up</label> </span>
    </form>
    <form className={css.form}>
      <span className={css.title}>Sign Up</span>
      <div className={css.form_control}>
        <input type="text" className={css.input} required=""/>
        <label className={css.label}>Username</label>
      </div>
      <div className={css.form_control}>
        <input type="email" className={css.input} required=""/>
        <label className="label">Email</label>
      </div>
      <div className="form_control">
        <input type="password" className={css.input} required=""/>
        <label className={css.label}>Password</label>
      </div>
      <button>Sign Up</button>

      <span className={css.bottom_text}>Already have an account? <label for="register_toggle" className={css.}>Sign In</label> </span>
    </form>

<<<<<<< HEAD:src/pages/login/index.jsx
    
=======

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Registr = () => {

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
        <input type="text" placeholder="last name" {...("firstName")}/>
         <p>{errors?.firstName?.message}</p>
        <input type="text" placeholder="first name" {...loginr("lastName")}/>
        <p>{errors?.lastName?.message}</p>
        <input type="email" placeholder="email" {...loginr("email")}/>
        <p>{errors?.email?.message}</p>
        <input type="password" placeholder="password" {...loginr("password")}/>
        <p>{errors?.password?.message}</p>
        <input type="password" placeholder="copy password"  {...loginr("passwordConfirmation")}/>
        <p>{errors?.passwordConfirmation?.message}</p>
        <input type="checkbox" id="checkbox" {...loginr("isAccept")}/>
        <label htmlFor="checkbox">Accepted privacy policy</label>
        <p>{errors?.isAccept?.message}</p>
        <button>Registr</button>
      </form>
>>>>>>> 20bfa4fd787662ac6c513a655ae86115261d592d:src/pages/registr/index.jsx
    </div>
</div>

<<<<<<< HEAD:src/pages/login/index.jsx
  )}


export const login=()=>{
return(

<button className={css.Btn}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 
  11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32
   320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6
    3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32
     32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 
     32-32z"></path></svg></div>
  
  <div className={css.logo}>Login</div>
</button>

)

}




export default Login
=======
export default Registr;
>>>>>>> 20bfa4fd787662ac6c513a655ae86115261d592d:src/pages/registr/index.jsx
