/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import css from "./styled.module.scss";

const Button = (props) => {
  const { title, variant, onClick, children } = props;
  const classBtn = {
    primary: css.primary,
    secondary: css.secondary,
    default: css.default,
  };

  return (
    <button className={classBtn[variant]} onClick={onClick}>
      {children || title}
    </button>
  );
};

export default Button;
