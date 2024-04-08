import styled from "styled-components";
import { COLORS } from "../../assets/images/style/colors";

export const TodoList = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 10px;
  padding: 10px;
  background: none;
  border: 1px solid ${COLORS.blackBlue};
`;
export const Title = styled.h1`
  width: 100%;
  color: ${COLORS.blue};
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${COLORS.blueViolet};
    color: white;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const todoItems = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border: 1px solid #000;
    border-radius: 10px;
    height: 15px;
    background-color: ${COLORS.blueViolet};
  }
  &::-webkit-scrollbar {
    width: 10px;
   
  }
 
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
`;

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
  border-radius: 10px;
  background-color: ${COLORS.violet};
`;
