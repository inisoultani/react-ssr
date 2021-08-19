import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = { onServerRender: true };

const actionReducerBuilder = (builder) => {
  builder.addDefaultCase((state, action) => {});
};

// const commentReducer = createReducer(initialState, actionReducerBuilder);

const ssrSlice = createSlice({
  name: 'ssr',
  initialState,
  reducers: {},
  extraReducers: actionReducerBuilder,
});

export const {} = ssrSlice.actions;

export default ssrSlice.reducer;
