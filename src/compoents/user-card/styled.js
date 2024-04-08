import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const UserItem = styled.div`
width:270px;
min-height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:20px;
cursor:pointer;
background-color:${COLORS.blackBlue};
transition: size 0.3s ease-in-out;
color: ${COLORS.purple};

&:hover {
    width: 300px;
    height: 400px;
    background-color: ${COLORS.blue};
    color: ${COLORS.blackBlue};
  }
`;

export const UserName = styled.p`
  width: 100%;
  min-height: 20px;
  font-size: 18px;

  text-align: center;
  font-weight: 500;
  &:hover{
   
  }
`;
