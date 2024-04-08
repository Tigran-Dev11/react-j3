import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../albums/services";


export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getUser();

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);