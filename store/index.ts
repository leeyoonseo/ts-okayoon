import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import logger from 'redux-logger';
import reducer from '@/reducer/index';
import { authSaga } from './modules/auth.saga';

const sagaMiddleware = createSagaMiddleware();

function* saga() {
  yield all([fork(authSaga)]);
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export default store;
