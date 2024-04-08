import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${COLORS.purple};
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`

  font-size: 40px;
  color: ${COLORS.blueViolet};
  transition: font-size 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    font-size: 60px; 
    color: ${COLORS.violet};
  }
`;
