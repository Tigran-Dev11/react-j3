import React from "react";


export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {

  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <button className="edit-icon" onClick={() => editTodo(task.id)} >edit</button>
        <button className="delete-icon" onClick={() => deleteTodo(task.id)} >close</button>
        </div>
    </div>
  )
};
