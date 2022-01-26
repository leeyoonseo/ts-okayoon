import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Apps from '@/components/template/Apps/Apps';

export default function Index() {
  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Apps />
    </>
  );
}
