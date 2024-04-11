import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const Primary  = styled.input`
width:200px;
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
@media screen and (${BREAKPOINTS.mobile}){
    width:350px;
    height:50px;

}
`

