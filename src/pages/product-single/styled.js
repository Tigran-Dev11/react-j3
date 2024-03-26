
import styled from "styled-components"
import { BREAKPOINTS } from "../../assets/style/breakpoint"

export const SingleProductContainer = styled.div`
width:100%;
min-height:500px;
display: flex;
padding:20px 40px;
align-items: center;
justify-content:flex-start;


`

export const ProductItem= styled.div`
width:800px;
min-height:500px;
display: flex;
align-items: center;
gap:20px;

@media (${BREAKPOINTS.mobile}){
    width:500px;
    min-height:500px;
    gap:5px;
}
`
export const ItemImg = styled.img`
width:300px;
height:250px;
border-radius:110px;

@media (${BREAKPOINTS.mobile}){
width:150px;
height:200px
}
`

export const ItemDescription= styled.p`
width:450px;
min-height:150px;
font-size:32px;
@media (${BREAKPOINTS.mobile}){
    width:250px;
    min-height:110px;
    font-size:36px;
}

`