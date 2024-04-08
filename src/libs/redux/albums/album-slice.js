import { createSlice } from "@reduxjs/toolkit";
import { getAlbum } from "./actions";
import { FETCH_STATUS } from "../../../utils/constants";

export const AlbumSlice = createSlice({
  name: "album",
  initialState: {
    albums: [],
    albumsStatus: FETCH_STATUS.IDL,
  },

  reducers: {
    removeAlbum: (state, {payload}) => {
        state.albums = state.albums.filter((album) => album.id !== payload);
      }
    
  },

  extraReducers: (builder) => {
    builder.addCase(getAlbum.pending, (state) => {
      state.albumsStatus = FETCH_STATUS.PENDING;
    }),
      builder.addCase(getAlbum.fulfilled, (state, { payload }) => {
        state.albumsStatus = FETCH_STATUS.SUCCESS;
        state.albums = payload;
      }),
      builder.addCase(getAlbum.rejected, (state) => {
        state.albumsStatus = FETCH_STATUS.FAILED;
      });
  },
  
});

export const albumActions = {
  ...AlbumSlice.actions,
  getAlbum,
};

export const AlbumReducer = AlbumSlice.reducer;
