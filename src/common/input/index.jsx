/* eslint-disable react/prop-types */

import * as S from "./styled";
const Input = ({ type, placeholder, variant, register, error}) => {
  let StyledInput;
  switch (variant) {
    case "primary":
      StyledInput = S.Primary;
      break;
    case "secondary":
      StyledInput = S.Secondary;
      break;
    default:
      StyledInput = S.Default;
  }
  return (
    <StyledInput
      type={type}
      {...register}
      error={error}
      placeholder={placeholder}
      variant={variant}
    />
  );
};

export default Input;
