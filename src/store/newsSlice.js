import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getMarkerDataApi, newsDataApi} from '../services/api';

export const getNewsDetails = createAsyncThunk(
  'newsDetails',
  async (data, val) => {
    return await newsDataApi()
      .then(response => {
        return response?.data;
      })
      .catch(error => {
        return val.rejectWithValue(error);
      });
  },
);

export const getPaginatedData = createAsyncThunk(
  'newsPaginatedDetails',
  async (data, val) => {
    return await newsDataApi(data)
      .then(response => {
        return response?.data;
      })
      .catch(error => {
        return val.rejectWithValue(error);
      });
  },
);

export const fetchMarkerData = createAsyncThunk(
  'markerData',
  async (data, val) => {
    return await getMarkerDataApi()
      .then(response => {
        return response?.data;
      })
      .catch(error => {
        return val.rejectWithValue(error);
      });
  },
);

const initialState = {
  paginatedNewsList: [],
  loading: false,
  loadMore: false,
  newsData: [],
  markerList: [],
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState: initialState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase(getNewsDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNewsDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.newsData = action.payload?.articles;
    });
    builder.addCase(getNewsDetails.rejected, (state, {payload}) => {
      console.log('-----------------', payload);
      state.loading = false;
    });
    builder.addCase(getPaginatedData.pending, (state, action) => {
      state.loadMore = true;
    });
    builder.addCase(getPaginatedData.fulfilled, (state, {payload}) => {
      state.newsPaginatedDetails = payload?.articles;
      state.newsData = state.newsData?.concat(payload?.articles);
      state.loadMore = false;
    });

    builder.addCase(fetchMarkerData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMarkerData.fulfilled, (state, action) => {
      state.loading = false;
      state.markerList = action.payload?.Items;
    });
    builder.addCase(fetchMarkerData.rejected, (state, {payload}) => {
      console.log('-----------------', payload);
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
