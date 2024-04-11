import styled from "styled-components";
import { FONTS } from "../../assets/style/fonts";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const JoinContainer = styled.div`
  width: 420px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const JoinTitle = styled.h3`
  width: 410px;
  min-height: 90px;
  //styleName: Heading H2;
  font-family: ${FONTS.sen};
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2px;
  text-align: center;
  color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    font-size: 28px;
    min-height:50px;
  }
`;
export const JoinDescription = styled.p`
  width: 400px;
  min-height: 40px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: ${COLORS.grey};
  @media screen and (${BREAKPOINTS.mobile}){
    width: 100%;
    font-size: 18px;        
}
`;
