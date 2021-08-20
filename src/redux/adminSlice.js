import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import baseApi from '../apis/baseApi';
import hash from 'object-hash';

const initialState = [];

export const fetchAdminAsync = createAsyncThunk(
  'admin/fetchAdmin',
  async (arg, thunkApi) => {
    // console.log(thunkApi);
    const api = thunkApi.extra;
    const response = await api.get('admins');
    // console.log(response);
    return response.data;
  },
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAsync.fulfilled, (state, action) => {
        // console.log(action);
        action.payload.forEach((user) => {
          if (!state.some((userInState) => hash(userInState) === hash(user)))
            state.push(user);
        });
      })
      .addCase(fetchAdminAsync.rejected, (state, action) => {
        console.log(action);
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectAdmins = (state) => state.admins;

export const {} = adminSlice.actions;

export default adminSlice.reducer;
