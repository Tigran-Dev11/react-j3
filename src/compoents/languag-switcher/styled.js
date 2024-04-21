import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";

export const Select = styled.select`
  width: 50px;
  height: 30px;
  background: none;
  color: ${COLORS.white};
`;

export const Option = styled.option`
  width: 25px;
  height: 25px;
  background: none;
  color: ${COLORS.darkBlue};
`;
