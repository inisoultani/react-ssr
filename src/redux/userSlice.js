import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import baseApi from '../apis/baseApi';
import hash from 'object-hash';

const initialState = [];

export const fetchUserAsync = createAsyncThunk(
  'user/fetchUser',
  async (arg, thunkApi) => {
    // console.log(thunkApi);
    const api = thunkApi.extra;
    const response = await api.get('users');
    // console.log(response);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        // console.log(action);
        action.payload.forEach((user) => {
          if (!state.some((userInState) => hash(userInState) === hash(user)))
            state.push(user);
        });
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectUsers = (state) => state.users;

export const {} = userSlice.actions;

export default userSlice.reducer;
