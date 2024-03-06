import css from "./styled.module.scss";

const Input = ({ placeholder, primary, secondary, type }) => {
  const inputClass = primary
    ? css.InputPrimary
    : secondary
    ? css.inputSecondary
    : css.input;
  return (
    <input placeholder={placeholder} className={inputClass} type={type} ></input>
  );
};
export default Input;
