import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { IMAGES } from "../../assets/images";
import { BREAKPOINTS } from "../../assets/style/breakpoints";
import { NavLink } from "react-router-dom";
import { FONTS } from "../../assets/style/fonts";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${COLORS.purple};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const HomeHeader = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${IMAGES.headerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const HomeHeaderContainer = styled.div`
  width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.h4`
  width: 220px;
  height: 20px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  font-family: ${FONTS.inter};
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 180px;
    height: 10px;
    font-size: 18px;
  }
`;

export const SubTitle = styled.h1`
  width: 800px;
  min-height: 120px;
  font-family: ${FONTS.sen};
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    min-height: 80px;
    font-size: 28px;
    line-height: 40px;
  }
`;

export const AuthorInfo = styled.p`
  width: 240px;
  min-height: 28px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.white};

  @media screen and (${BREAKPOINTS.mobile}) {
    color: ${COLORS.darkwhite};
  }
`;
export const Information = styled.p`
  width: 600px;
  min-height: 60px;
  font-size: 16px;
  font-family: ${FONTS.inter};
  line-height: 28px;
  color: ${COLORS.white};
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    min-height: 40px;
    font-size: 16px;
    line-height: 28px;
    color: ${COLORS.darkwhite};
  }
`;

export const PostContainer = styled.div`
  width: 1200px;
  min-height: 650px;
  display: flex;
  padding: 20px;
  justify-content: space-around;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 100%;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    flex-direction: column;
    border: none;
    gap: 5px;
  }
`;
export const PostLeftContainer = styled.div`
  width: 600px;
  min-height: 700px;
  border: 1px solid ${COLORS.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 50%;
    align-items: flex-start;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    align-items: center;
  }
`;

export const PostBackground = styled.div`
  width: 550px;
  min-height: 350px;
  background-image: url(${IMAGES.postBackroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 100%;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
  }
`;

export const PostTitel = styled.h2`
  width: 550px;
  min-height: 50px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  font-family: ${FONTS.sen};
  padding: 0 20px;
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 90%;
    font-size: 28px;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    font-size: 20px;
  }
`;
export const PostAuthor = styled.p`
  width: 570px;
  height: 20px;
  font-weight: 400;
  color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 90%;
    padding: 0 10px;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
  }
`;

export const PostInfoContainer = styled.div`
  width: 570px;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 90%;
    padding: 0 10px;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
  }
`;
export const PostInformation = styled.h4`
  width: 570px;
  min-height: 20px;
  font-size: 16px;
  font-family: ${FONTS.sen};
  line-height: 28px;
  color: ${COLORS.darkBlue};

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 1200px;
    padding: 0 4px;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
  }
`;

export const PostDescription = styled.p`
  font-size: 16px;
  width: 570px;
  min-height: 20px;
  line-height: 28px;
  font-family: ${FONTS.inter};
  color: ${COLORS.lightGrey};
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 90%;
  }
`;

export const PostRightContainer = styled.div`
  width: 500px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (${BREAKPOINTS.tablet}) {
    width: 50%;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    align: center;
  }
`;

export const PostRightTitel = styled.h2`
  width: 450px;
  height: 50px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  font-family: ${FONTS.sen};
  padding: 0 20px;
  @media screen and (${BREAKPOINTS.tablet}) {
    font-size: 28px;
    width: 90%;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    text-align: center;
    justify-content: center;
  }
`;
export const AboutContainer = styled.div`
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ColorsLine = styled.div`
  width: 1200px;
  min-height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;
export const ColorsLineLeft = styled.div`
  width: 700px;
  min-height: 20px;
  background-color: ${COLORS.yellow};
`;
export const ColorsLineRight = styled.div`
  width: 300px;
  min-height: 20px;
  background-color: ${COLORS.violet};
`;

export const AboutSection = styled.div`
  width: 1200px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: ${COLORS.lightPurple};

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 90%;
    flex-direction: column;
    padding: 0 20px;
  }
`;
export const AboutSectionLeft = styled.div`
  width: 500px;
  min-height: 300px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 200px;
  }
`;

export const AboutTitles = styled.p`
  width: 200px;
  min-height: 20px;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: left;
  color: ${COLORS.darkBlue};
`;
export const AboutText = styled.p`
  width: 500px;
  min-height: 20px;
  font-family: "Inter" sans-serif;
  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const AboutDescriptions = styled.h2`
  width: 400px;
  min-height: 30px;
  font-family: "Sen", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -2px;
  text-align: left;
  color: ${COLORS.darkBlue};
  @media screen and (${BREAKPOINTS.mobile}) {
    font-size: 28px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-family: "Sen", sans-serif;
  width: 100px;
  min-height: 20px;
  color: ${COLORS.violet};
`;

export const AboutSectionRight = styled.div`
  width: 500px;
  min-height: 300px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    min-height: 200px;
  }
`;

export const CategoriContainer = styled.div`
  width: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CategorySection = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  justify-content: space-around;
  @media screen and (${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
    gap: 5px;
  }
`;

export const StartUpContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (${BREAKPOINTS.mobile}) { 
    min-height:500px;
  }
`;
export const StartUpContainerLeft = styled.div`
  width: 900px;
  min-height: 600px;
  position: absolute;
  background-image: url(${IMAGES.startUpBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 500px;
    min-height: 600px;
    top: 0;
  }
`;
export const StartUpContainerRight = styled.div`
  width: 450px;
  min-height: 500px;
  position: absolute;
  z-index: 1;
  background-color: ${COLORS.white};
  right: 100px;
  bottom: 0;
  padding: 0 20px;

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 370px;
    min-height: 300px;
    left: 0;
    top: 0;
  
  }
`;
export const AuthorContainer = styled.div`
width: 100%;
min-height: 320px;
display: flex;
flex-direction: column;
align-items: center;
  
`;
export const AuthorSection = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  justify-content: space-around;
  @media screen and (${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
    gap: 5px;
  }
`;
export const LogoContainer = styled.div`
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (${BREAKPOINTS.mobile}){
    width: 400px;
    justify-content: space-between;
  }
  `

  export const Logo = styled.img`
  width: 180px;
  height: 32px;
  @media screen and (${BREAKPOINTS.mobile}) {
    width: 50px;
    height: 13px;
  }
`;


export const  BlogContainer =styled.div`
width:100%;
min-height:470px;
display: flex;
justify-content:space-around;
align-items:center;
background-color:${COLORS.milk};

@media  screen and (${BREAKPOINTS.mobile}){
  flex-direction:column;

}
`
export const  BlogContainerLeft =styled.div`
width:380px;
min-height:300px;
display: flex;
flex-direction:column;
gap:15px;
border-right:1px solid ${COLORS.lightGrey};
@media  screen and (${BREAKPOINTS.mobile}){
  width:100%;
  align-items:center;
  border-right:none;
  border-bottom:1px solid ${COLORS.lightGrey};

}
`
export const AboutBlog= styled.p`
width:280px;
min-height:100px;

`
export const  BlogContainerRight =styled.div`
width:500px;
min-height:350px;
display: flex;
flex-direction:column;
gap:15px;
@media  screen and (${BREAKPOINTS.mobile}){
  width:100%;
  align-items:center;


}

`
export const BlogAbout= styled.h4`
width:450px;
min-height:150px;
font-size:
font-family: ${FONTS.sen};
font-size: 24px;
font-weight: 700;
line-height: 32px;
@media  screen and (${BREAKPOINTS.mobile}){
width:100%;
font-size:18px;
text-align:center;
}

`

