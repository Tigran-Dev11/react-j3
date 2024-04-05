import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../libs/redux/todo/todo-slice";
import { todosSelector } from "../../libs/redux/todo/selector";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { usersActions } from "../../libs/redux/user/user-slice";
import { usersSelector } from "../../libs/redux/user/selector";

const Todo = () => {
  const { todoValue, todos } = useSelector(todosSelector);
  const { users, usersStatus } = useSelector(usersSelector);
  const [activeEditableTodo, setActiveEditableTodo] = useState();
  const [updateTodoOne, setUpdateTodoOne] = useState("");

  console.log(usersStatus);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      name: todoValue,
      status: false
    };

    dispatch(todoActions.addTodo(newTodo));
  };

  const deleteTodo = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  const changeStatus = (checked, id) => {
    dispatch(todoActions.changeStatus({ checked, id }));
  };

  const editTodo = ({ id, name }) => {
    setActiveEditableTodo({
      [id]: name
    });
    setUpdateTodoOne(name);
  };

  const saveTodo = (id) => {
    dispatch(todoActions.editTodo({ id, name: updateTodoOne }));
    setActiveEditableTodo();
    setUpdateTodoOne("");
  };

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          value={todoValue}
          onChange={(e) =>
            dispatch(todoActions.onChangeTodoInput(e.target.value))
          }
        />
        <button onClick={submit}>add</button>
      </form>
      <div>
        {todos?.map(({ id, name, status }) => {
          return (
            <div key={id}>
              <input
                type="checkbox"
                checked={status}
                onChange={(e) => changeStatus(e.target.checked, id)}
              />
              {activeEditableTodo?.[id] ? (
                <input
                  type="text"
                  value={updateTodoOne}
                  onChange={(e) => setUpdateTodoOne(e.target.value)}
                />
              ) : (
                <p>{name}</p>
              )}
              {activeEditableTodo?.[id] ? (
                <button onClick={() => saveTodo(id)}>save</button>
              ) : (
                <button onClick={() => editTodo({ id, name })}>edit</button>
              )}
              <button onClick={() => deleteTodo(id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
