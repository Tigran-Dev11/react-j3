import { styled } from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { FONTS } from "../../assets/style/fonts";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const CardItems = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CardImg = styled.img`
  width: 400px;
  min-height: 300px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 350px;
    min-height: 250px;
  }
`;

export const CardInfoContainer = styled.div`
width: calc(100% - 400px)
min-height: 300px;
display:flex;
flex-direction:column;
gap:10px;
padding:10px;

@media screen and (${BREAKPOINTS.mobile}) {
  width: 100%;
  min-height: 200px;
  padding:0;
}
`;
export const CardCategory = styled.p`
  width: 180px;
  min-height: 20px;
  color: ${COLORS.violet};
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: left;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 300px;
    font-size: 18px;
  }
`;

export const CardTitle = styled.h2`
width:500px;
min-height:90px;
font-family: ${FONTS.sen};
color:${COLORS.darkBlue}
font-size: 36px;
font-weight: 700;

@media screen and (${BREAKPOINTS.mobile}) {
width:400px;
  font-size:20px;
}
`;

export const CardSubtitle = styled.h3`
width:350px;
min-height:56px;
font-family: ${FONTS.sen};
color:${COLORS.lightGrey}};
font-family: ${FONTS.inter};
font-size: 16px;
font-weight: 400;
line-height: 28px;
text-align: left;

@media screen and (${BREAKPOINTS.mobile}){
  font-size:20px;
}
`;
