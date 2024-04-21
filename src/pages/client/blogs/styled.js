import styled from "styled-components";
import { COLORS } from "../../../assets/style/colors";
import { FONTS } from "../../../assets/style/fonts";
import { IMAGES } from "../../../assets/images";
import { BREAKPOINTS } from "../../../assets/style/breakpoints";
import { NavLink } from "react-router-dom";

export const BlogContainer = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 420px;
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.lightPurple};

  @media screen and (${BREAKPOINTS.mobile}) {
    background-image: url(${IMAGES.blogHeaderBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const HeaderContainerLeft = styled.div`
  width: 650px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const HeaderTitle = styled.p`
  width: 160px;
  min-height: 20px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 3px;
  text-align: left;
  color: ${COLORS.darkBlue};
`;

export const HeaderSubtitle = styled.h2`
  width: 400px;
  min-height: 20px;
  font-family: ${FONTS.sen};
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2px;
  text-align: left;
  color: ${COLORS.darkBlue};
`;

export const AuthorsName = styled.p`
  width: 200px;
  min-height: 20px;
  font-family: ${FONTS.inter};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${COLORS.grey};

  @media screen and (${BREAKPOINTS.mobile}) {
    color: ${COLORS.darkBlue};
  }
`;

export const Description = styled.p`
  width: 400px;
  min-height: 56px;
  font-family: ${FONTS.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;

  @media screen and (${BREAKPOINTS.mobile}) {
    color: ${COLORS.darkBlue};
  }
`;

export const HeaderContainerRight = styled.div`
  width: 520px;
  min-height: 400px;
  background-image: url(${IMAGES.blogHeaderBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const CategorySection = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  justify-content: space-around;
  padding:20px 0;

  @media screen and (${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
    gap: 5px;
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

export const BlogPostsContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BlogPostsTitle = styled.h1`
  width: 100%;
  height: 64px;
  font-family: ${FONTS.sen};
  color: ${COLORS.darkBlue};
  font-size: 36px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
  text-align: left;
  border-bottom: 1px solid ${COLORS.grey};
`;

export const BlogCardContainer = styled.div`
  width: 1000px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(NavLink)`
text-decoration: none;
`