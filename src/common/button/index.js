import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { BREAKPOINTS } from "../../assets/style/breakpoint";

const Button = styled.button`
  padding: ${({ padding }) => padding || "12px 30px"};
  background:${({ background }) => background || "none"};
  color: ${({color}) => color || COLORS.white};
  border: 1px solid ${({border}) => border || COLORS.white};
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
  text-transform: inherit;

  @media(${BREAKPOINTS.mobile}){
    padding:${({ padding }) => padding ||"6px 10px"};
    font-size: 16px;
  }
`;
export default Button;
