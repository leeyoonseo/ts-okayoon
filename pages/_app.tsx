import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko'; // import locale

import { bucketUrl } from '@/constants/index';

import GlobalStyle from '../assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';
import 'antd/dist/antd.css';

import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// dayjs
dayjs.extend(isLeapYear);
dayjs.locale('ko');

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <React.StrictMode>
        <Head>
          <meta charSet='utf-8' />
          <meta http-euqiv='x-UA-Compatible' content='ie=edge' />
          <meta name='Robot' content='all' />
          <meta name='author' content='Okayoon.lee' />
          <meta
            name='description'
            content='Front-end Web Developer Portfolio Site: react, redux'
          />
          <link
            rel='shortcut icon'
            href={`${bucketUrl}/favicon.ico`}
            type='image/x-icon'
          />
          <meta property='og:image' content='../public/icon_logo.png' />
          <meta
            property='og:description'
            content='Front-end Web Developer Portfolio Site: react, redux'
          />
          <meta property='og:title' content='Okayoon' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, user-scalable=no'
          />
          <title>OKAYOON</title>
        </Head>

        <GlobalStyle />

        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
    </>,
  );
}

// TODO:
// propTypes: prop-types
// _error.js / 404.js
// store => configurestore
// withRedux ??
