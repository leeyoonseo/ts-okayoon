export interface ITheme {
  [prop: string]: any; // index
  primary: string;
  secondary: string;
  tertiary: string;
  textColor: string;
}
export interface IThemes {
  [prop: string]: any; // index
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  light: {
    primary: '#e0d6fb',
    secondary: '#8686df',
    tertiary: '#e7e8fe',
    textColor: '#333',
  },
  dark: {
    primary: '#4e5c78',
    secondary: '#222c41',
    tertiary: '#b8b8bf',
    textColor: 'white',
  },
};

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

export default themes;

// TODO:
// 다크모드, 라이트모드
// https://velog.io/@hwang-eunji/styled-component-typescript
