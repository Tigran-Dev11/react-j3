import styled from "styled-components";
import { FONTS } from "../../assets/style/fonts";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 770px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const HeaderSubtitle = styled.h3`
  width: 140px;
  height: 20px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 3px;
  text-align: center;
  color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.h1`
  width: 560px;
  height: 64px;
  font-family: ${FONTS.sen};
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
  text-align: center;
  color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    font-size: 30px;
  }
`;
export const HeaderDescription = styled.p`
  width: 770px;
  min-height: 56px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: ${COLORS.grey};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 60px;
    font-size: 16px;
  }
`;

export const AboutWorking = styled.div`
  width: 768px;
  min-height: 260px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.violet};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`;
export const AboutWorkingLeft = styled.div`
  width: 300px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 50%;
  }
`;

export const AboutWorkingTitle = styled.p`
  width: 96px;
  min-height: 20px;
  font-family: ${FONTS.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: ${COLORS.lightPurple};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    font-weight: 700;
    color: ${COLORS.white};
    font-size: 18px;
  }
`;

export const AboutWorkingDescription = styled.p`
  width: 265px;
  min-height: 28px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: ${COLORS.lightPurple};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const AboutWorkingSubtitle = styled.h5`
  width: 224px;
  min-height: 32px;
  color: ${COLORS.white};
  font-family: ${FONTS.sen};
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  border-top: 1px solid ${COLORS.lightGrey};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    font-size: 14px;
    font-weight: 100;
    color: ${COLORS.lightPurple};
  }
`;
export const AboutWorkingRight = styled.div`
  width: 300px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 50%;
  }
`;
export const FormContainer = styled.form`
  width: 770px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
width:400px;
min-height:120px;
padding: 20px;
@media screen and (${BREAKPOINTS.mobile}){
    width:350px;
    min-height:50px;

}


`