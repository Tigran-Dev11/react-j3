import { useState } from "react";
import "./style.css";

const TodoList = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [editTodoIds, setEditTodoIds] = useState({});
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 100000),
      name: "React js",
      status: false
    },
    {
      id: Math.floor(Math.random() * 100000),
      name: "Next js",
      status: false
    }
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    if (!newTodoValue) {
      alert("input is required");
      return;
    }

    let newTodo = {
      id: Math.floor(Math.random() * 100000),
      name: newTodoValue,
      status: false
    };

    setTodos((prevState) => [...prevState, newTodo]);
    setNewTodoValue("");
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editTodo = (todo) => {
    setEditTodoIds({ ...editTodoIds, [todo.id]: todo.name });
  };

  return (
    <div>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodoValue}
            onChange={(event) => setNewTodoValue(event.target.value)}
          />
          <button>add todo</button>
        </form>
      </div>
      <div className="todo-items-container">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="item-container">
              <input type="checkbox" />
              {editTodoIds[todo.id] ? (
                <input
                  type="text"
                  value={editTodoIds[todo.id]}
                  onChange={(event) =>
                    setEditTodoIds({
                      ...editTodoIds,
                      [todo.id]: event.target.value
                    })
                  }
                />
              ) : (
                todo.name
              )}
              <div>
                <button onClick={() => editTodo(todo)}>edit</button>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
