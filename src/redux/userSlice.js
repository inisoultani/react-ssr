import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import baseApi from '../apis/baseApi';
import hash from 'object-hash';

const initialState = { users: [], currentUser: 123 };

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

export const fetchCurrentUserAsync = createAsyncThunk(
  'user/fetchCurrentUser',
  async (arg, thunkApi) => {
    // console.log(thunkApi);
    const api = thunkApi.extra;
    const response = await api.get('current_users');
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
          if (
            !state.users.some((userInState) => hash(userInState) === hash(user))
          )
            state.users.push(user);
        });
      })
      .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
        console.log(action);
        state.currentUser = action.payload || false;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectUsers = (state) => state.users.users;
export const selectCurrentUser = (state) => state.users.currentUser;

export const {} = userSlice.actions;

export default userSlice.reducer;
