import { styled } from "styled-components";
import { IMAGES } from "../../../assets/images";
import { COLORS } from "../../../assets/style/colors";
import { FONTS } from "../../../assets/style/fonts";
import { BREAKPOINTS } from "../../../assets/style/breakpoints";

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeaderContainer = styled.div`
  width: 100%;
  min-height: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AboutHeader = styled.header`
  width: 100%;
  height: 450px;
  background-image: url(${IMAGES.startUpBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 1;
  bottom: 0;
  @media screen and (${BREAKPOINTS.mobile}) {
    top: 0;
  }
`;

export const AboutHeaderInfo = styled.div`
  width: 500px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: absolute;
  z-index: 2;
  background-color: ${COLORS.white};
  top: 0;
  left: 100px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 370px;
    left: 0;
    background: none;
  }
`;
export const AboutHeaderTitle = styled.p`
    font-size: 20px;
    width: 300px;
    min-height: 20px;
    color${COLORS.darkBlue};
    font-family: ${FONTS.inter};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 3px;
    text-align: left;
    @media screen and (${BREAKPOINTS.mobile}) {
        width: 100%;
        font-size: 14px;
      }
  `;
export const AboutHeaderSubTitle = styled.h3`
  width: 100%;
  min-height: 192px;
  font-family: Sen;
  font-size: 38px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -2px;
  text-align: left;
  color: ${COLORS.darkBlue};

  @media screen and (${BREAKPOINTS.mobile}) {
    font-size: 28px;
    line-height: 44px;
    min-height: 100px;
  }
`;
export const AboutHeaderBottomContainer = styled.div`
  width: 100%;
  min-height: 440px;
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.lightPurple};
  align-items: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
`;

export const AboutHeaderBottomLeft = styled.div`
  width: 45%;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 250px;
  }
`;
export const AboutHeaderBottomRight = styled.div`
  width: 45%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 250px;
  }
`;

export const AboutHeaderInformation = styled.p`
  widt: 500px;
  min-height: 110px;
  color: ${COLORS.grey};
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    font-size: 14px;
  }
`;
export const AuthorsContainer = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  justify-content: space-around;
  @media screen and (${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
  }
`;
export const AboutPostSection = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const AboutPostContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${BREAKPOINTS.mobile}){
    min-height:500px;
  }
`;

export const AboutPostContainerLeft = styled.div`
  width: 520px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 200px;
  }
`;
export const AboutPostContainerRight = styled.div`
  width: 680px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-image: url(${IMAGES.aboutPostLeftBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
export const AboutPostContainerRightBottom = styled.div`
  width: 680px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-image: url(${IMAGES.aboutPostRightBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const AboutPostContainerLeftBottom = styled.div`
  width: 520px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  padding:10px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 200px;
  }
`;
