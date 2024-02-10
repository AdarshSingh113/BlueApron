import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const storeDetails = createAsyncThunk();

const initialState = {};

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: initialState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase();
  },
});
