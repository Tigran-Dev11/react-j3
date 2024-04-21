import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../../utils/constants";
import { getUsers } from "./action";


export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userStatus: FETCH_STATUS.IDL,
  },
  reducers: {
    addUser:(state,{payload})=>{
      state.users.push(payload);
    },
    removeUser:(state,{payload})=>{
      state.users = state.users.filter(user=>user.id!==payload);
    },
    updateUser:(state,{payload})=>{
      state.users = state.users.map(user=>user.id===payload.id?payload:user);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.userStatus = FETCH_STATUS.PENDING;
    }),
      builder.addCase(getUsers.fulfilled, (state, { payload }) => {
        state.userStatus = FETCH_STATUS.SUCCESS;
        state.users = payload;
      }),
      builder.addCase(getUsers.rejected, (state) => {
        state.userStatus = FETCH_STATUS.FAILED;
      });
  },
});

export const usersActions = {
  ...userSlice.actions,
  getUsers,
};

export const userReducer = userSlice.reducer;
