import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";


export const NavBar = styled.div`
width: 100%;
min-height:80px;
display:flex;
justify-content: center;
align-items:center;
gap:15px;
background-color:${COLORS.purple};
`

export const Link = styled(NavLink)`
text-decoration: none;
font-size:18px;
font-weight: 800;
color : ${COLORS.blueViolet};
transition:font-size 0.2s ease;
&:hover {
    color: ${COLORS.violet};
    font-size:26px;
}
`