import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";
import { COLORS } from "../../../assets/style/colors";


export const RegistrContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegisterForm = styled.form`
  width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Link= styled(NavLink)`
text-decoration: none;
color:${COLORS.darkBlue};
font-size:16px;
&:hover{
  color:${COLORS.violet};
}
`