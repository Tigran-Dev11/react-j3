import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./services";


export const getAlbum = createAsyncThunk(
  "album/getAlbum",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAlbum();

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);