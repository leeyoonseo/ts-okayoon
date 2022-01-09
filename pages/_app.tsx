// import App from "next/app";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/styles/globalStyle"
import { theme } from "../assets/styles/theme"

import type { AppProps /*, AppContext */ } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>타이틀</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp