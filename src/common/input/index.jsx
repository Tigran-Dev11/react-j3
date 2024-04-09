/* eslint-disable react/prop-types */

import * as S from "./styled"

// eslint-disable-next-line no-unused-vars
const Input = ({type, placeholder,variant }) => {
    let StyledInput;
    switch (variant) {
      case 'primary':
        StyledInput = S.Primary;
        break;
      case 'secondary':
        StyledInput = S.Secondary;
        break;
      default:
        StyledInput = S.Default;
    }
  return (
    <StyledInput type={type} placeholder={placeholder} variant={variant}/>
  )
};

export default Input;
