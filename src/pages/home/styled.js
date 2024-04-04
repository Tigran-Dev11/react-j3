import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const TodoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodoHeader = styled.div`
  width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius:10px;
  background-color:${COLORS.violet}
`;

export const Title = styled.h1`
  width: 100%;
  color: ${COLORS.blue};
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
`;
