import css from "./styled.module.scss";

const Input = ({ placeholder, variant, type, register, error }) => {
  const inputClass = {
    primary: css.primary,
    secondary: css.secondary,
  };
  return (
    <>
      <input
        placeholder={placeholder}
        {...register}
        className={inputClass[variant]}
        type={type}
      ></input>
      <p>{error}</p>
    </>
  );
};
export default Input;
