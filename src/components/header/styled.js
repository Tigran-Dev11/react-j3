import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { NavLink } from "react-router-dom";
import { BREAKPOINTS } from './../../assets/style/breakpoint';

export const Nav = styled.nav`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.blueViolet};

  @media( ${BREAKPOINTS.mobile}) {
    min-height: 60px; 
    justify-content:space-between;
  
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size:24px;
  font-family: PT Serif;
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.blueViolet};
    opacity: 0.4;
  }

  @media (${BREAKPOINTS.mobile}) {
    font-size: 16px;

  }
`;

export const Title = styled.h1`
  width: 250px;
  min-height: 40px;
  font-family: PT Serif;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  color: ${COLORS.white};

@media(${BREAKPOINTS.mobile}){
  width:100px;
}
  
`;
export const MenuContainer = styled.div`
  width: 600px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (${BREAKPOINTS.mobile}) {
   display: none;

  }
`;

export const BasketIcon = styled.img`
  width: 20px;
  height: 20px;
  background: none;
 
`;
export const BasketCount = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left:8px;
  background-color:${COLORS.white}
  
`;

export const basketCountLine = styled.div`
width:25px;
min-height:100px;
display: flex;
align-items: center;
position: relative;
  cursor: pointer;

  @media (${BREAKPOINTS.mobile}) {
    min-height: 60px;
    
  }

`
export const BasketLangContainer = styled.div`
  width: 300px;
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (${BREAKPOINTS.mobile}) {
    min-height: 60px;
    
  }
`;
 export const BurgerIcon = styled.div`
  width: 30px;
  height: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (${BREAKPOINTS.mobile}) {
  display:block;
  }
  
`;
export const burgerMenuIcon = styled.img`
width: 30px;
height: 30px;
`
export const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  z-index: 999;
  display: ${props => (props.isOpen ? 'block' : 'none')}`