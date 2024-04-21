import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";
import { COLORS } from "../../../assets/style/colors";

export const RegistrContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
`;

export const RegisterForm = styled.form`
  width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
`;

export const Link= styled(NavLink)`
text-decoration: none;
color:${COLORS.darkBlue};
font-size:16px;

&:hover{
  color:${COLORS.violet};
}
`;

export const RegistrTitle = styled.h1`
color:${COLORS.darkBlue};
line-height:10px;
font:size:36px;
min-height:40px;
`