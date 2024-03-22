import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
width: 100%;
min-height:100px;
display:flex;
justify-content: space-around;
align-items: center;
border:1px solid ${COLORS.black};

@media(max-width:480px){
    min-height:80px;

}
`

export const pagesContainer =styled.div`
width:500px;
display:flex;
gap:10px;

@media(max-width:480px){
   display:none;
}`


export const accountsContainer = styled.div`
width:300px;
display:flex;
align-items:center;
gap:10px;


@media(max-width:480px){
    display:none;
}
`


export const image  = styled.img`
width:27px;
height:24px
cursor:pointer;
`


export const Link = styled(NavLink)`
text-decoration: none;
color:${COLORS.black}
`
