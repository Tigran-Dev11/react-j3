import css from "./styled.module.scss";

const Button = ({ title, variant }) => {
  const classes = {
    primary: css.primary,
    secondary: css.secondary,
  };

  return <button className={classes[variant]}>{title}</button>;
};

export default Button;
