import styled from "styled-components";
import { FONTS } from "../../assets/style/fonts";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";
import { NavLink } from "react-router-dom";

export const JoinContainer = styled.div`
  width: 420px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:10px;

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
  text-align: center;
  color: ${COLORS.darkBlue};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    font-size: 24px;
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

export const Link = styled(NavLink)`
text-decoration: none;
`