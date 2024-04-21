import styled from "styled-components";
import { FONTS } from "../../../assets/style/fonts";
import { COLORS } from "../../../assets/style/colors";
import { BREAKPOINTS } from "../../../assets/style/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.lightPurple};
 
`;

export const HeaderTitle = styled.h1`
  width: 500px;
  min-height: 60px;
  display: flex;
  font-family: ${FONTS.sen};
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
  color: ${COLORS.darkBlue};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    min-height: 40px;
    line-height: 40px;
    font-size: 20px;
    
  }
`;

export const HeaderSubtitle = styled.p`
  width: 270px;
  min-height: 30px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 250px;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding:10px 0;
`;

export const InformationTitle = styled.h1`
  width: 720px;
  min-height: 60px;
  font-family: ${FONTS.sen};
  font-size: 36px;
  font-weight: 700;
  line-height: 64px;
  color: ${COLORS.darkBlue};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 390px;
    min-height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
  }
`;

export const InformationSubtitle = styled.p`
  width: 770px;
  min-height: 300px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.grey};
  
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 390px;
    font-size: 16px;
  }
`;
