import styled from "styled-components";
import { COLORS } from "../../assets/style/color";

export const Button = styled.button`
   padding: 12px 30px;
   border-radius: 8px;
   background-color: ${(({isPrimary})=>isPrimary ? COLORS.red : COLORS.black)};
   color: ${COLORS.white};
   font-size: 20px;
` 