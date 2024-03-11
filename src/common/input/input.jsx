import css from "./styled.module.scss";


const Input = ({ placeholder, variant, type,register }) => {
  const classesInp ={
    primary: css.primary,
    secondary: css.secondary,
  }
  return (
    <input placeholder={placeholder} {...register}  className={classesInp[variant]} type={type}></input>
  );
};
export default Input;
