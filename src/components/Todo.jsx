import React from "react";
import { ICONS } from "./../assets/images/index";
import "./style.css"
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="todo-icons">
        <img
          src={ICONS.editIcon}
          className="edit-icon"
          onClick={() => editTodo(task.id)}
        />
        <img
          src={ICONS.deleteIcon}
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
