import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./services";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getUsers();

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
