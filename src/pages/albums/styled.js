import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";


export const AlbumContainer = styled.div`
width:100%;
min-height:800px;
display: flex;
flex-direction: column;
background-color:${COLORS.lightPurple};
`

export const AlbumTitle = styled.h1`
width:100%;
min-height:20px;
text-align:center;
font-size:20px;
color:${COLORS.blackBlue};
`

export const AlbumHeader = styled.div`
width:100%;
 min-height:400pxpx;
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content: center;
gap:5px;
`