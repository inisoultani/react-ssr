import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import baseApi from '../apis/baseApi';
import hash from 'object-hash';

const initialState = { currentUser: null };

export const fetchCurrentUserAsync = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (arg, thunkApi) => {
    // console.log(thunkApi);
    const api = thunkApi.extra;
    const response = await api.get('current_user');
    // console.log(response);
    return response.data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
        // console.log(action);
        state.currentUser = action.payload || false;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectCurrentUser = (state) => state.auth.currentUser;

export const {} = authSlice.actions;

export default authSlice.reducer;
