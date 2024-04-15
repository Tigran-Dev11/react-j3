import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";
import { FONTS } from "../../assets/style/fonts";

export const NavBar = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  background-color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.mobile}) {
    justify-content: space-between;
  }
`;
export const Title = styled.h4`
width:20px; 
height20px;
color: ${COLORS.white};
font-family: ${FONTS.inter};

`;

export const LinkContainer = styled.div`
  width: 500px;
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: ${COLORS.white};
  font-family:${FONTS.inter};
  transition: font-size 0.2s ease;
  &:hover {
    color: ${COLORS.lightGrey};
    font-size: 26px;
  }
`;

export const BtnSwitcherContainer = styled.div`
  width: 250px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  width: 50px;
  height: 80px;
  display: none;
  justify-content: center;
  align-items: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    display: flex;
  }
  
`;

export const MenuIcon = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius:5px;
  mix-blend-mode:darken;
`;

export const BurgerMenuContainer = styled.div`
  width: 100%;
  min-height:calc(100vh - 80px);
  background-color: ${COLORS.white};
  position: fixed;
  z-index:4;
  top: 80;
  right: 0;
  bottom: 0;
  left:0
  background-color: ${COLORS.white};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')}; 
`;

export const BurgerMenuLinkContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;


`;
export const BurgerMenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  font-weight: 800;
  color: ${COLORS.darkGrey};
  font-family: ${FONTS.inter};
  &:hover {
    color: ${COLORS.yellow};
  }
`;

