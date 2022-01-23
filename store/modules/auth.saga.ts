import { PayloadAction } from '@reduxjs/toolkit';
import { all, fork, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  InitialState,
  setTheme,
  setUser,
} from '@/reducer/modules/auth.reducer';

// * Redux는 동기적으로 실행되기 때문에 비동기적 명령을 내릴 수 없다.
// 이를 해결하기 위해 Redux-saga를 사용한다.(비동기 동작 실행)
function* watchSetUser(action: PayloadAction<InitialState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

function* watchSetTheme(action: PayloadAction<InitialState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

export function* authSaga() {
  yield all([
    takeEvery(setUser.type, watchSetUser),
    takeLatest(setTheme.type, watchSetTheme),
  ]);
  // yield takeEvery(setUser.type, watchSetUser);
}
