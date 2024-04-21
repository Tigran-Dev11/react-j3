import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./service";


export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.getUsers();
console.log(response)
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);