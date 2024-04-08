import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todoValue: ""
  },

  reducers: {
    onChangeTodoInput: (state, { payload }) => {
      state.todoValue = payload;
    },
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo?.id !== payload);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (payload.id === todo.id) {
          return {
            ...todo,
            name: payload.name
          };
        }
        return todo;
      });
    },
    changeStatus:(state, { payload }) => {
        state.todos = state.todos.map((todo) => {
            if (payload.id === todo.id) {
              return {
                ...todo,
                status: payload.checked
              };
            }
            return todo;
          });
    }

  }
});

export const todoActions = {
  ...todoSlice.actions
};

export const todoReducer = todoSlice.reducer;