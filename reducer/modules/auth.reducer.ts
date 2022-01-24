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
  themeMode: string;
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
  themeMode: 'light',
  user: initialUser,
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // // login
    // loginRequest(state, action) {
    //   state.isUserLoading = true;
    //   state.error = null;
    // },
    // loginSuccess(state, action) {
    //   state.isUserLoading = false;
    // },
    // loginFail(state, action) {
    //   state.isUserLoading = false;
    //   // TODO: 추후에는 문자열로 바꿔서?
    //   state.error = true;
    // },

    // // logout
    // logoutRequest(state) {
    //   state.isUserLoading = true;
    //   state.error = null;
    // },
    // logoutSuccess(state) {
    //   state.isUserLoading = false;
    //   state.user = initialUser;
    // },
    // logoutFail(state) {
    //   state.isUserLoading = false;
    //   // TODO: 추후에는 문자열로 바꿔서?
    //   state.error = true;
    // },

    setThemeMode(state, action: PayloadAction<InitialState>) {
      console.log('setThemeMode', state, action.payload);
      return { ...state, ...action.payload };
    },

    setUser(state, action: PayloadAction<InitialState>) {
      return { ...state.user, ...action.payload };
    },
  },
});

export const {
  // loginRequest, loginSuccess, loginFail,
  setUser,
  setThemeMode,
} = auth.actions;
export default auth.reducer;

// TODO:
// - saga 테스트 (AWS REST API)
// http://petstore.execute-api.ap-northeast-2.amazonaws.com/petstore/pets
