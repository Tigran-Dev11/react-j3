
import styled from "styled-components";
import { IMAGES } from "../../assets/images";

export const HomeContainer = styled.div`
width:100%;
min-height:100vh;
display: flex;
flex-direction: column;
`
export const HomeSection = styled.div`
width:100%;
min-height:600px;
background-image:url(${IMAGES.backgroundHome});
background-repeat: no-repeat;
background-size: cover;
background-position:center;
position:relative;
padding:40px;
`

export const informationSection = styled.div`
width: 500px;
min-height:400px;
display:flex;
flex-direction: column;
border:1px solid black;
position: absolute;
`