import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { BREAKPOINTS } from "../../assets/style/breakpoint";


export const ProductItem =styled.div`
width:260px;
min-height:354px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
cursor:pointer;

@media (${BREAKPOINTS.mobile}){
    min-height:130px;
    flex-direction:row ;
    width:500px;
    justify-content:flex-start;
    gap:15px;

  
}
`
export const ProductImage =styled.img`
width:100%;
height:300px;
border-radius:110px;

@media (${BREAKPOINTS.mobile}){
width:100px;
height:100px;
border-radius:50%;


}
`
export const Paragraph = styled.p`
width:200px;
min-height:100px;
display: flex;
align-items: center;
font-family: PT Serif;
font-size: 18px;
font-weight: 400;
line-height: 30px;
text-align: center;

@media (${BREAKPOINTS.mobile}){
    font-size: 16px;
    line-height: 20px;
}

`

export const Navlink = styled(NavLink) `
text-decoration: none;`