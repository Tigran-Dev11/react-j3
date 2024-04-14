import styled from "styled-components";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const Logo = styled.img`
  width: 180px;
  height: 32px;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 50px;
    height: 13px;
  }
`;
export const LogosContainer = styled.div`
width: 150px;
min-height:50px;
display:flex;
transition: transform 0.5s ease-in-out;
& :hover{
    transform: scale(1.1)

    .slick-list{
        display:flex;
    }
}
`