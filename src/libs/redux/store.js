import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./to-do-list/todo-slice";
import { AlbumReducer } from "./albums/album-slice";
import { userReducer } from "./user/user-slice";


const store = configureStore({
  reducer: {
    todos: todoReducer,
    albums:AlbumReducer,
    users:userReducer
    
  },
});

export default store;
