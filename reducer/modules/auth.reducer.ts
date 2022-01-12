import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  originId: number | null;
  isManager: boolean;
  id: string | null;
  avatar: string | null;
  nickname: string | null;
}

export interface InitialState {
  isUserLoading: boolean | null;
  error: boolean | null;
  user: User;
}

const initialUser = {
  originId: null,
  isManager: false,
  id: null,
  avatar: null,
  nickname: null,
};

const initialState = {
  isUserLoading: false,
  error: false,
  user: initialUser,
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login
    loginRequest(state, action) {
      state.isUserLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isUserLoading = false;
    },
    loginFail(state, action) {
      state.isUserLoading = false;
      // TODO: 추후에는 문자열로 바꿔서?
      state.error = true;
    },

    // logout
    logoutRequest(state) {
      state.isUserLoading = true;
      state.error = null;
    },
    logoutSuccess(state) {
      state.isUserLoading = false;
      state.user = initialUser;
    },
    logoutFail(state) {
      state.isUserLoading = false;
      // TODO: 추후에는 문자열로 바꿔서?
      state.error = true;
    },

    SetUser(state, action: PayloadAction<InitialState>) {
      return { ...state.user, ...action.payload };
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, SetUser } = auth.actions;
export default auth.reducer;

// TODO:
// - saga 테스트 (AWS REST API)
// http://petstore.execute-api.ap-northeast-2.amazonaws.com/petstore/pets
