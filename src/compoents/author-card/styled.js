import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { FONTS } from "../../assets/style/fonts";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const AuthorCardContainer = styled.div`
  width: 300px;
  min-height: 320px;
  background-color: ${COLORS.lightPurple};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top:10px;
  cursor:pointer;

  &:hover {
    background-color: ${COLORS.milk};
  }
  @media screen and (${BREAKPOINTS.tablet}){
    width:280px;
    min-height:180px;
}
@media screen and (${BREAKPOINTS.mobile}){
    width:200px;
    min-height:150px;
}
`;

export const AuthorCardImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;

  @media screen and (${BREAKPOINTS.tablet}){
    width:100px;
    height:100px;
}
`;
export const AuthorCardName = styled.h3`
  width: 140px;
  min-height: 40px;
  font-family: ${FONTS.sen};
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1px;
  text-align: center;
  @media screen and (${BREAKPOINTS.tablet}){
    width:200px;
    min-height:20px;
    line-height:5px;
 
}
@media screen and (${BREAKPOINTS.mobile}){
    width:150px;
    min-height:20px;
    font-size:18px;
}
`;
export const AuthorCardDescription = styled.p`
  width: 240px;
  min-height: 20px;
  font-family: ${FONTS.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  @media screen and (${BREAKPOINTS.mobile}){
    width:120px;

}
`;
export const SocialMediaLink = styled.div`
  width: 200px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;

  @media screen and (${BREAKPOINTS.mobile}){
    width:100px;
    min-height:20px;
}

`;
export const IconsContainer = styled.div`
width: 200px;
min-height: 20px;
`

export const Icons = styled.img`
  width: 15px;
  height: 15px;`