import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    todos:[]
  },

  reducers: {
    increment: (state) => {
      state.counter += 1;
    },

    decrement: (state) => {
      state.counter -= 1;
    },
    changeCounterValue: (state, { payload }) => {
        state.counter = payload


    }
  } 
});

export const counterActions = {
  ...counterSlice.actions
};

export const counterReducer = counterSlice.reducer;
