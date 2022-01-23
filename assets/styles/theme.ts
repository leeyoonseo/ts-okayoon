import { DefaultTheme } from 'styled-components';

export const dark = {
  bgColor: 'black',
  textColor: 'white',
  boderColor: 'black',
};

export const light = {
  bgColor: 'white',
  textColor: 'black',
  boderColor: 'white',
};

export const defaultTheme: DefaultTheme = {
  light: {
    common: {
      text: 'black',
      black: '#222831',
      white: '#ffffff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
  dark: {
    common: {
      text: 'white',
      black: '#222831',
      white: '#ffffff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
};
// const theme: DefaultTheme = {
//   basicWidth: '320px',

//   color: {
//     primary: '#64c5ba',
//     secondary: '#A593E0',
//     tertiary: '',
//     gray: '#dedede',
//   },
// };

const colors = {
  black: '#566270',
  rgbaBlack: 'rgba(0, 0, 0, 0.5)',
  rgbaGray: 'rgba(86, 98, 112, 0.5)',
  ivory: '#FFFFF3',
  lightGray: '#f0f2f5',
  gray: '#dedede',
  lightYellowGray: '#E0E3DA',
  purple: '#A593E0',
  mint: '#64c5ba',
  yellow: '#ffbf2e',
  green: '#26ca3f',
  darkPink: '#ef5285',
  pink: '#ED9282',
  chatSimsimi: '#ffe34f',
  chatUser: '#f18d8b',
};

const theme = {
  colors: {
    primary: '#A593E0',
    darkprimary: '#957be9',
    secondary: '#ED9282',
    darksecondary: '#f37b66',
    tertiary: '#ffe34f',
    darktertiary: '#f1d12c',
    gray: '#dedede',
    darkgray: '#c9c6c6',
  },
};

export default theme;

// TODO:
// 다크모드, 라이트모드
// https://velog.io/@hwang-eunji/styled-component-typescript
