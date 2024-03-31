import styled from "styled-components";
import { COLORS } from "../../assets/style/color";

import { BREAKPOINTS } from './../../assets/style/breakpoint';

export const Nav = styled.nav`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  gap:15px;
  align-items: center;
  background-color: ${COLORS.reg};
  
  @media( ${BREAKPOINTS.mobile}) {
    min-height: 60px; 
    justify-content:space-between;
 `
  

 export const MenuContainer = styled.div`
 width:500px;
 display: flex;
 justify-content: space-evenly;
 `
// `;
// // export const NavLinks = styled(NavLink)`
// text-decoration: none;
// font-size:24px;
// font-family: PT Serif;
// color: ${COLORS.white};

// &:hover {
//   background-color: ${COLORS.blueViolet};
//   opacity: 0.4;
// }

// @media (${BREAKPOINTS.mobile}) {
//   font-size: 30px;
//   color: ${COLORS.black};
//   &:hover {
//     background:none;
//   }
// }
// `;
