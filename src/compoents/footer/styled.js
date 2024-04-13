import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";
import { NavLink } from "react-router-dom";
import { BREAKPOINTS } from "../../assets/style/breakpoints";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 400px;;
  background-color: ${COLORS.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${BREAKPOINTS.mobile}) {
justify-content: space-around;

  
`;

export const FooterHeader = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${BREAKPOINTS.mobile}) {
  }
  justify-content: space-around;
`;
export const Title = styled.h4`
  width: 150px;
  color: ${COLORS.white};
  font-family: "Inter", sans-serif;
  padding: 0 10px;
  font-size: 14px;

  @media screen and (${BREAKPOINTS.mobile}) {
    font-size: 18px;
  
  }
`;

export const LinkContainer = styled.div`
  width: 700px;
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  @media screen and (${BREAKPOINTS.mobile}) {
    padding: 0;
    gap: 2px;
    
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: ${COLORS.white};
  font-family: "Inter", sans-serif;
  &:hover {
    color: ${COLORS.lightGrey};
   
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    font-size: 12px; 
    font-weight: 1;
  }
`;

export const SubscriberContainer = styled.div`
  width: 1000px;
  min-height: 250px;
  background-color: ${COLORS.darkGrey};
  display: flex;
  justify-content: space-between;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 700px;
  }

  @media screen and (${BREAKPOINTS.mobile}) {
    width: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SubscribeTitle = styled.h3`
  width: 500px;
  min-height: 90px;
  font-family: "Sen", sans-serif;
  color: ${COLORS.white};
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${BREAKPOINTS.tablet}) {
    width: 300px;
font-size:24px;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    min-height: 60px;
    width: 100%;
    font-size: 20px;
  }
`;

export const SubscribeForm = styled.form`
  width: 490px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media screen and (${BREAKPOINTS.tablet}){
   width:400px;
   flex-direction: column;
  }
  @media screen and (${BREAKPOINTS.mobile}) {
    flex-direction: column;
    min-height: 100px;
    width: 400px;
  }
`;
export const FooterInformation = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled.p`
  width: 300px;
  height: 30px;
  font-size: 16px;
  color: ${COLORS.white};
  line-height: 28px;
  padding: 0 30px;

  @media screen and (${BREAKPOINTS.mobile}) {
    font-size: 12px;
    min-height: 60px;
    width: 400px;
  }
`;
export const FooterIcons = styled.div`
  width: 400px;
  min-height: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
