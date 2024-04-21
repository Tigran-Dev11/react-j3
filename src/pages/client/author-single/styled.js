import styled from "styled-components";
import { COLORS } from "/src/assets/style/colors";
import { FONTS } from "src/assets/style/fonts";
import { BREAKPOINTS } from "/src/assets/style/breakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.h1`
  width: 100%;
  min-height: 20px;
  text-align: center;
  color: ${COLORS.darkBlue};
  font-family: ${FONTS.sen};
  font-size: 36px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    font-size: 28px;
  }
`;

export const AuthorItem = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    padding: 10px;
  }
`;

export const ItemImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

export const ItemDescription = styled.p`
  width: 450px;
  min-height: 100px;
  font-size: 32px;
  text-align: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    font-size: 28px;
  }
`;
