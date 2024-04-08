import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const UserHeader= styled.div`
width:100%;
min-height:600px;
background-color:${COLORS.lightPurple};
display:flex;
flex-direction:column;
align-items:center;
`
export const UserContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:15px;

`
export const UsersTitle = styled.h1`
font-size:36px;
color:${COLORS.blueViolet};
text-transform:uppercase;


`