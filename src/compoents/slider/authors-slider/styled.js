import { styled } from "styled-components";
import { BREAKPOINTS } from "../../../assets/style/breakpoints";



export const SliderContainer = styled.div`
  width: 100%;
  min-height: 350px;
  gap:10px;
  padding: 40px 60px;
  

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 250px;
 
  }
`;

