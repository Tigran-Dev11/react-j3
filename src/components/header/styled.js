import styled from "styled-components";
import { COLORS } from "../../assets/style/color";

import { BREAKPOINTS } from './../../assets/style/breakpoint';

export const Nav = styled.nav`
  width: 100%;
  min-height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLORS.blueViolet};

  @media( ${BREAKPOINTS.mobile}) {
    min-height: 60px; 
    justify-content:space-between;
  
  }
`;
