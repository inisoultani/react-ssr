import { createSlice, createAction } from '@reduxjs/toolkit';

import Comment from './Comment';

const initialState = [new Comment('comment from client')];

export const addComment = createAction('comment/add');

const isActionStartWithComment = (action) => {
  return action.type.startsWith('comment');
};

const actionReducerBuilder = (builder) => {
  builder
    .addCase(addComment, (state, action) => {
      state.push(new Comment(action.payload));
    })
    .addMatcher(isActionStartWithComment, (state, action) => {
      console.log('matcher isActionStartWithComment', state);
    })
    .addDefaultCase((state, action) => {});
};

// const commentReducer = createReducer(initialState, actionReducerBuilder);

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: actionReducerBuilder,
});

export default commentSlice.reducer;
