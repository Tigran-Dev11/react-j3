import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

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
font-family: "Inter", sans-serif;

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
  font-family: "Inter", sans-serif;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const BurgerMenuContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.white};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.white};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Spancontainer = styled.div`
width:100%;
min-height:20px;
display: flex;
justify-content:flex-end
align-items:center;

`;
export const Span = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.darkBlue};
  cursor: pointer;
`;

export const BurgerMenuLinkContainer = styled.div`
  width: 400px;
  min-height: 500px;
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
  font-family: "Inter", sans-serif;

  &:hover {
    color: ${COLORS.yellow};
  }
`;
