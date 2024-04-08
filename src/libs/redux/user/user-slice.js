import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../../utils/constants";
import { getUsers } from "./actions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    usersStatus: FETCH_STATUS.IDL
  },

  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.usersStatus = FETCH_STATUS.PENDING;
    }),
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
        state.usersStatus = FETCH_STATUS.SUCCESS;
        state.users = payload;
    }),
    builder.addCase(getUsers.rejected, (state) => {
        state.usersStatus = FETCH_STATUS.FAILED;
    })
  }
});

export const usersActions = {
  ...userSlice.actions,
  getUsers,
};

export const userReducer = userSlice.reducer;