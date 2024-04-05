import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter-slice";
import { todoReducer } from "./todo/todo-slice";
import { userReducer } from "./user/user-slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    users: userReducer
  }
});
