import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

export const UserCard = styled.div`
  width: 260px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
  border: 1px solid ${COLORS.darkBlue};
  border-radius: 10px;


  &:hover {
    background-color: ${COLORS.lightPurple};
  }
`;

export const UserName = styled.h3`
  font-size: 18px;
  color: ${COLORS.yellow};
`;
export const UserDescription = styled.h4`
  font-size: 14px;
  color: ${COLORS.darkBlue};
`;
export const Span = styled.span`
  width: 60px;
  height: 20px;
  border:1px solid;
  cursor: pointer;

`;

export const SpanContainer= styled.div`
width:150px;
min-height:60px;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`