import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const PostCardContainer = styled.div`
  width: 400px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px;
  cursor: pointer;
  gap:15px;

  &:hover {
    width: 420px;
    min-height: 200px;
    background-color: ${COLORS.yellow};
    transition: 0.3s ease-in-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 100%;
    align-items: center;

    &:hover {
      width: 300px;
      min-height: 150px;
      padding:20px;
      
    }
  }
`;

export const PostAuthor = styled.p`
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.darkBlue};
 
  &:hover {
    font-size: 20px;
    color: ${COLORS.lightPurple};
    font-weight: 600;
  }
`;

export const PostInformation = styled.h4`
  width: 100%;
  min-height: 50px;
  font-size: 16px;
  font-family: "Sen", sans-serif;
  line-height: 20px;
  font-weight: 700;
  color: ${COLORS.darkBlue};

  &:hover {
    color: ${COLORS.lightPurple};
  }
`;
