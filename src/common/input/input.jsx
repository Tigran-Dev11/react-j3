import css from "./styled.module.scss";


const Input = ({ placeholder, variant, type,register }) => {
  const inputClass = {
    primary:css.primary,
    secoondary:css.secondary,
  }
  return (
    <input placeholder={placeholder} {...register}  className={inputClass[variant]} type={type}></input>
  );
};
export default Input;
