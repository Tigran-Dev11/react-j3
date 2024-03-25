import styled from "styled-components"
import { COLORS } from "../../assets/style/color"
export const Select = styled.select`
width:50px;
height:30px;
background:none;
border:1px solid ${COLORS.white};
color: ${COLORS.white};
border-radius:10px;
`
export const Option= styled.option`
 background-color: ${COLORS.blueViolet};
`