import styled from "styled-components";
import { COLORS } from "../../../assets/style/colors";
import { FONTS } from "../../../assets/style/fonts";
import { BREAKPOINTS } from "../../../assets/style/breakpoints";

export const CategoryContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryCardContent = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const CategoryImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${COLORS.milk};
  border-radius: 3px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 80px;
    height: 80px;
  }
`;

export const CategoryTitle = styled.h3`
  width: 300px;
  min-hight: 40px;
  font-family: ${FONTS.sen};
  font-size: 28px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -1px;
  text-align: left;
`;

export const CategoryCardDescription = styled.p`
  width: 100%;
  min-height: 40px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 350px;
  }
`;
