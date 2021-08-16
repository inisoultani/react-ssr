import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentSlice';

// below checking is used when this store loaded on SSR
let preloadedState = {};
if (typeof window !== 'undefined') {
  // grab the state from a global variable injected into server generated HTML
  preloadedState = window ? window.__PRELOADED_STATE__ : {};

  // mark the passed state to  be garbage-collected
  delete window.__PRELOADED_STATE__;

  // modify state to show the ability to change preloaded state when rendered by server
  preloadedState.comments[0].text = 'comment-modified-when-hydrate';
}
export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
  preloadedState: preloadedState,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
