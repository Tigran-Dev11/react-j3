import styled from "styled-components";
import { COLORS } from "../../../assets/style/colors";

export const LoginContainer = styled.div`
width: 100%;
min-height:600px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid;
`

export const LoginForm = styled.form`
width: 500px;
height: 300px;
display: flex;
flex-direction: column;
gap:15px;
align-items: center;
`

export const LoginTitle = styled.h1`
color:${COLORS.violet};
line-height:10px;
font:size:36px;
min-height:40px;
`