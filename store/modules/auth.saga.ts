import { PayloadAction } from '@reduxjs/toolkit';
// TODO: 해당 이펙트 관련사항 공부
import { takeEvery } from 'redux-saga/effects';

import { InitialState, SetUser } from '@/reducer/modules/auth.reducer';

// * Redux는 동기적으로 실행되기 때문에 비동기적 명령을 내릴 수 없다.
// 이를 해결하기 위해 Redux-saga를 사용한다.(비동기 동작 실행)
function* setUserSaga(action: PayloadAction<InitialState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

export function* authSaga() {
  yield takeEvery(SetUser.type, setUserSaga);
}
