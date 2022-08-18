import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './user';
import hisoryReducer from './history';
import commonReducer from './common';
import dashboardReducer from './dashboard';
import tagReducer from './tag';

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
    dashboard: dashboardReducer,
    tag: tagReducer,
    history: hisoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk]),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
