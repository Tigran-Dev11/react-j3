import styled from "styled-components";
import { COLORS } from "../../assets/style/color";
import { IMAGES } from "../../assets/images";
import { BREAKPOINTS } from "../../assets/style/breakpoint";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 


`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${COLORS.blueViolet};
  display: flex;
  justify-content:space-around;

  @media (${BREAKPOINTS.mobile}) {
    min-height:350px;
  }


 
`;

export const ContainerLeft = styled.div`
  width: 40%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (${BREAKPOINTS.mobile}) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.h2`
  width: 600px;
  min-height: 140px;
  font-family: PT Serif;
  font-size: 56px;
  font-weight: 400;
  line-height: 84px;
  text-align: left;
  color: ${COLORS.white};

  @media (${BREAKPOINTS.mobile}) {
    width:100%;
    min-height: 150px;
    font-size: 30px;
    line-height: 40px;
  }
`;
export const Paragraph = styled.p`
  width: 360px;
  min-height: 30px;
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.025em;
  text-align: left;
  color: ${COLORS.white};
  opacity: 0.5;
`;
export const ButtonLine = styled.div`
  width: 200px;
  min-height: 100px;
  display: flex;
  align-items: center;
`;

export const ContainerRight = styled.div`
  width: 30%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const containerRightBackground = styled.div`
  width: 270px;
  min-height: 400px;
  border-radius: 180px;
  background-image: url(${IMAGES.containerRightBack});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media(${BREAKPOINTS.mobile}){
    display: none;
  }
`;

export const CollectionContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 20px;

  
`;

export const CollectionTitle = styled.h1`
  width: 600px;
  min-height: 500px;
  font-family: PT Serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 170px;
  text-transform: uppercase;
  color: ${COLORS.green};

  @media (${BREAKPOINTS.mobile}) {
    width:100%;
    font-size: 60px;
   

  }
`;

export const CollectionImage = styled.img`
  width: 600px;
  min-height: 500px;
  position: absolute;


  @media (${BREAKPOINTS.mobile}){
width: 100%;
min-height: 400px;
  }
`;
export const informationContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(${BREAKPOINTS.mobile}){
  justify-content: space-around;
  }
`;
export const informationContainerBackground = styled.div`
  width: 30%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(${BREAKPOINTS.mobile}){
  justify-content: flex-start;
padding:0 10px;}
`;

export const Background = styled.div`
  width: 300px;
  min-height: 350px;
  border-radius: 120px;
  background-image: url(${IMAGES.infoContainerBack});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media(${BREAKPOINTS.mobile}){
    width:100px;
    min-height:15 0px;
  }
`;

export const InformationAboutProd = styled.div`
  width: 50%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media(${BREAKPOINTS.mobile}){
    width: 70%;
    min-height: 300px;
    align-items: flex-start;
  }
`;

export const InformationTitle = styled.h1`
  width: 400px;
  min-height: 25px;
  font-family: PT Serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
  border-bottom: 1px solid ${COLORS.blueViolet};

  @media(${BREAKPOINTS.mobile}){
    width: 100%;
    font-size:26px;
  }
  
`;
export const InformationContainer = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const inforParagraphy = styled.p`
  width: 580px;
  min-height: 140px;
  font-family: PT Serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.5px;
  letter-spacing: 0.025em;
  text-align: left;

  @media(${BREAKPOINTS.mobile}){
    width: 100%;
    min-height: 150px;
    font-size: 18px;
    line-height: 24px;
  }
`;
export const InfoButtons = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
 justify-content: center;
`;
