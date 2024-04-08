import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const AlbumItem = styled.div`
  width: 350px;
  min-height: 50px;
  border: 1px solid ${COLORS.blackBlue};
  border-radius: 10px;
  display: flex;
  justify-content:space-around;
  padding: 0 5px;
  transition: width 0.3s ease-in-out;

&:hover {
    width: 300px;
    height:100px;
    background-color:${COLORS.blueViolet};
    color: ${COLORS.purple};
  align-items:center;
  }
`;

export const AlbumTitle = styled.p`
width: 300px;
font-size:18px;
color: ${COLORS.blackBlue};
`
export const Button = styled.button`
background:none;
border: none;
cursor: pointer;
`

export  const Img = styled.img`
width:20px;
height:20px;
`