import React, { ReactElement, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { ReducerType } from '../reducer/index';
import { User } from '../reducer/modules/auth.reducer';
import styled from 'styled-components';

import Apps from '@/components/template/Apps/Apps';

// TODO: 테마 작업할것.
const ThemeTest = styled.div`
  color: ${({ theme }) => {
    console.log(theme);
    // return theme.common;
    // return 'white';
    return theme.textColor;
  }};
`;

export default function Index() {
  const theme = useSelector<ReducerType, string>(({ auth }) => auth.theme);
  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Apps />

      <ThemeTest theme={theme}>테마 테스트</ThemeTest>
    </>
  );
}
