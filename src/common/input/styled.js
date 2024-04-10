import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";

export const Primary  = styled.input`
width:320px;
height:50px;
background:none;
border:1px solid ${COLORS.yellow};
color:${COLORS.white};
padding:0 20px;
&::placeholder{
    color:${COLORS.white};
}
`

export const Secondary = styled.input`
width:400px;
height:50px;
background:none;
border-radius:2px;
padding:0 20px;
border:1px solid ${COLORS.lightGrey};
`

