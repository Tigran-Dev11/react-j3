import { useState } from "react";
import * as S from "./styled";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../../libs/redux/to-do-list/reducer";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import ToDoCard from "../../compoents/todo-card";
import { IMAGES } from "../../assets/images";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    complateTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const add = () => {
    if (todo === "") {
      setErrorMessage("Your list is empty");
    } else {
      props.addTodo({
        id: uuid(),
        item: todo,
        completed: false,
      });
      setTodo("");
      setErrorMessage("");
      setCheckedItems({}); 
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add();
  };

  const handleToggleChecked = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleRemove = (item) => {
    props.removeTodo(item.id);
    setCheckedItems((prevState) => {
      const updatedState = { ...prevState };
      delete updatedState[item.id];
      return updatedState;
    });
  };

  const updatedTodos = (item) => {
    props.updateTodo(item.id);
  };

  return (
    <S.TodoList>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          value={todo}
          type="text"
          onChange={handleChange}
          placeholder={errorMessage ? errorMessage : "Add a new todo..."}
          style={{
            borderColor: errorMessage ? "red" : "initial",
          }}
        />
        <S.Button type="submit">
          <S.Img src={IMAGES.addIcon} alt="addIcon" />
        </S.Button>
      </S.Form>
      <S.todoItems>
        {props.todos?.length > 0 &&
          props.todos.map((item) => (
            <ToDoCard
              onRemove={() => handleRemove(item)}
              updateTodo={() => updatedTodos(item)}
              complated={() => completeTodos(item.id)}
              isChecked={!!checkedItems[item.id]}
              handleToggleChecked={() => handleToggleChecked(item.id)} 
              key={item.id}
              item={item}
            />
          ))}
      </S.todoItems>
    </S.TodoList>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
