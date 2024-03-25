import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { BREAKPOINTS } from "../../assets/style/breakpoint";

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductTitle = styled.h2`
  width: 600px;
  min-height: 110px;
  font-family: PT Serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  text-transform: uppercase;

  @media (${BREAKPOINTS.mobile}) {
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
`;

export const ProductCategory = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
  }
`;
export const AboutProduct = styled.div`
width:100%;
min-height:350px;
display:flex;
justify-content:center;
align-items:center;
gap:30px;

@media(${BREAKPOINTS.mobile}){
  width:250px;
  flex-direction:column;
  min-height:400px;
  justify-content:space-around;
  align-items:flex-start;
}

`;
