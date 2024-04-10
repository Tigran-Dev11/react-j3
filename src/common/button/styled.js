import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";

export const Primary = styled.button`
  background-color: ${COLORS.yellow};
  // padding: 12px 80px;
  width: 210px;
  height: 50px;
  color: ${COLORS.white};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  text-align: center;
  border: none;
  font-size:12px;
  
`;

export const Secondary = styled.button`
  padding: 12px 50px;
  background-color: ${COLORS.white};
  color: ${COLORS.darkBlue};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  text-align: center;
  font-weight: 700;
  border: none;
  font-size:12px;
`;

export const Default = styled.button`
  padding: 10px 40px;
  background-color: ${COLORS.yellow};
  color: ${COLORS.white};
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  border: none;
`;
