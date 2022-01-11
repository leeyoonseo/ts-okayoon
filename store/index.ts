// import { configureStore } from '@reduxjs/toolkit';
// // ...

// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// TODO: 예제
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from '../reducer/index';

// const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware,
});

export type AppDispatch = typeof store.dispatch;
export default store;
