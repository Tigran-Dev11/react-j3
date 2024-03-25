import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { NavLink } from "react-router-dom";
import { BREAKPOINTS } from "../../assets/style/breakpoint";

export const Footer = styled.footer`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.blueViolet};
  padding:40px;

  @media (${BREAKPOINTS.mobile}){
    padding:20px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 40px;
  font-family: PT Serif;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  color: ${COLORS.white};
  border-bottom: 3px solid ${COLORS.white};
  
`;

export const MenuContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
   flex-wrap:wrap;
   width: 200px;
   justify-content:center;
  }

  
`;
export const Ul = styled.ul`
width: 200px;
min-height: 300px;
display: flex;
flex-direction: column;
justify-content:flex-start;
font-family: Yu Gothic;
font-size: 20px;
font-weight: 700;
line-height: 50px;
color:${COLORS.white};

@media (${BREAKPOINTS.mobile}){
width:150px;
min-height:150px;
justify-content: center;
}

`
export const Navlink = styled(NavLink)`
color: ${COLORS.white};
text-decoration: none;
font-family: Yu Gothic;
font-size: 24px;
font-weight: 400;
line-height: 38px;



`
export const Img = styled.img`
width:40px;
height:40px;
`