import * as S from "./styled";
import ToDoCard from "../../compoents/todo-card";
import { IMAGES } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../libs/redux/to-do-list/selector";
import { v4 as uuid } from "uuid";
import { todoActions } from "../../libs/redux/to-do-list/todo-slice";
import { useState } from "react";
const Todos = () => {
  const { todoValue, todos } = useSelector(todosSelector);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      setErrorMessage("Your list is empty");
    } else {
      const newTodo = {
        id: uuid(),
        name: todoValue,
        status: false,
      };
      dispatch(todoActions.addTodo(newTodo));
      setErrorMessage("");
    }
    dispatch(todoActions.onChangeTodoInput(""));
  };

  return (
    <S.TodoContainer>
      <S.TodoHeader>
        <S.TodoList>
          <S.Title>todo list</S.Title>
          <S.Form>
            <S.Input
              type="text"
              value={todoValue}
              onChange={(e) =>
                dispatch(todoActions.onChangeTodoInput(e.target.value))
              }
              placeholder={errorMessage ? errorMessage : "Add a new todo..."}
              style={{
                borderColor: errorMessage ? "red" : "initial",
              }}
            />
            <S.Button type="submit" onClick={addTodo}>
              <S.Img src={IMAGES.addIcon} alt="addIcon" />
            </S.Button>
          </S.Form>

          <S.todoItems>
            {todos.map(({ id, name, status }) => (
              <ToDoCard key={id} id={id} name={name} status={status} />
            ))}
          </S.todoItems>
        </S.TodoList>
      </S.TodoHeader>
    </S.TodoContainer>
  );
};
export default Todos;
