import styled from "styled-components";
import { COLORS } from "../../assets/style/color";

export const ProductItemContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  padding:15px 0`;

export const ProductItem = styled.div`
  width: 260px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  border: 1px solid ${COLORS.blueViolet};
  border-radius: 30px;
  gap:10px;
`;

export const ProductImage = styled.img`
border-top:1px solid ${COLORS.blueViolet}
  width: 100%;
  height: 150px;
`;

export const ProductTitle = styled.p`
  width: 100%;
  min-height: 100px;
  text-align: center;
  font-family: PT Serif;
`;
export const CountContainer= styled.div`
width: 100%;
min-height: 100px;
display: flex;
justify-content: center;
align-items: center;
`

export const Span = styled.span`
width: 10px;
height: 10px;
`