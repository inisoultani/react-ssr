import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (thunkApi) => {
    const response = await axios.get(
      'http://react-ssr-api.herokuapp.com/users',
    );
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action);
        //state = [...action.payload];
        action.payload.forEach((user) => {
          state.push(user);
        });
      })
      .addDefaultCase((state, action) => {});
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
