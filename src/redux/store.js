import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentSlice';
import userSlice from './userSlice';
import clientApi from '../apis/clientApi';
import serverApi from '../apis/serverApi';
import ssrSlice from './ssrSlice';
import authSlice from './authSlice';
import adminSlice from './adminSlice';

export const createStore = (req) => {
  // below checking is used when this store loaded on SSR
  let preloadedState = null;
  let extraArg = null;
  if (typeof window !== 'undefined') {
    // grab the state from a global variable injected into server generated HTML
    preloadedState = window.__PRELOADED_STATE__;

    // mark the passed state to  be garbage-collected
    delete window.__PRELOADED_STATE__;

    // modify state to show the ability to change preloaded state when rendered by server
    preloadedState.comments[0].text = 'comment-modified-when-hydrate';
    preloadedState.ssr.onServerRender = false;
    // specifically for client store, we need the extraArgument tobe clientApi
    // in order to simulate api proxy call
    extraArg = clientApi;
  } else {
    preloadedState = {};
    extraArg = serverApi(req);
  }

  return configureStore({
    reducer: {
      comments: commentReducer,
      users: userSlice,
      admins: adminSlice,
      ssr: ssrSlice,
      auth: authSlice,
    },
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware) => {
      // ref : https://redux-toolkit.js.org/api/getDefaultMiddleware
      // on how to customize the default middleware
      return getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
        serializableCheck: false,
      });
    },
  });
};
