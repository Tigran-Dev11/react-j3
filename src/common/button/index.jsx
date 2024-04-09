/* eslint-disable react/prop-types */
import * as S from "./styled";

const Button = (props) => {
    const { title, variant, onClick, children }= props
    let StyledButton;
    switch (variant) {
      case 'primary':
        StyledButton = S.Primary;
        break;
      case 'secondary':
        StyledButton = S.Secondary;
        break;
      default:
        StyledButton = S.Default;
    }
  
    return (
      <StyledButton onClick={onClick}>
        {children|| title}
      </StyledButton>
    );
  };
  
  export default Button;