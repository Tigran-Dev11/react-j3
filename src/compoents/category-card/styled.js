import styled from "styled-components";
import { FONTS } from "../../assets/style/fonts";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const CategoryCardContainer = styled.div`
  width: 280px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.lightGrey};
  padding: 20px;
  gap: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.yellow};
    transition: 0.3s ease-in-out;
  }

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 260px;
    min-height: 180px;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 180px;
    min-height: 150px;
  }
`;

export const CategoryCardImg = styled.img`
  width: 25px;
  height: 25px;
  background-color: ${COLORS.milk};
  border-radius: 3px;
  &:hover {
    width: 50px;
    height: 50px;
    transition: 0.4s ease-in-out;
  }
`;

export const CategoryCardContent = styled.div`
  width: 200px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 100px;
    min-height: 120px;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 80px;
    min-height: 50px;
  }
`;

export const CategoryCardTitle = styled.h3`
  width: 300px;
  min-hight: 40px;
  font-family: ${FONTS.sen};
  font-size: 28px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -1px;
  text-align: left;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 200px;
    min-height: 20px;
    line-height: 5px;
    letter-spacing: 0;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 150px;
    min-height: 20px;
    font-size: 18px;
  }
`;

export const CategoryCardDescription = styled.p`
  width: 100%;
  min-height: 40px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  text-align: left;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 150px;
    min-height: 50px;
    font-size: 14px;
  }
`;
