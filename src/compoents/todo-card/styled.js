import styled from "styled-components";

export const TodoItem = styled.div`
  width: 300px;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid black;
  border-radius: 10px;


`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;
export const TodoTitile = styled.p`
  width: 200px;
`;

export const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  background: none;
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
`;