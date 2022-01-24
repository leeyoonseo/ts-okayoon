import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Apps from '@/components/template/Apps/Apps';

const ThemeTest = styled.div`
  color: ${({ theme }) => {
    return theme.textColor;
  }};
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Apps />

      <ThemeTest>테마 테스트</ThemeTest>
    </>
  );
}
