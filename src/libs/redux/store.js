import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./to-do-list/reducer";


const store = configureStore({
  reducer: reducer,
});

export default store;