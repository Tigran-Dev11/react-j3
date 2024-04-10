import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { IMAGES } from "../../assets/images";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${COLORS.purple};
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${IMAGES.headerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const HomeHeaderContainer = styled.div`
  width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.h4`
  width: 220px;
  height: 20px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 180px;
    height: 10px;
    font-size: 18px;
  }
`;

export const SubTitle = styled.h1`
  width: 800px;
  min-height: 120px;
  font-family: "Sen", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    min-height: 80px;
    font-size: 30px;
    line-height: 40px;
  }
`;

export const AuthorInfo = styled.p`
  width: 240px;
  min-height: 28px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
color: ${COLORS.darkwhite};

  }
`;
export const Information = styled.p`
  width: 600px;
  min-height: 60px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  line-height: 28px;
  color: ${COLORS.white};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    min-height: 40px;
    font-size: 16px;
    line-height: 28px;
    color: ${COLORS.darkwhite};
  }
`;
