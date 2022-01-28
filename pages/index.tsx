import React from 'react';
import Head from 'next/head';
import Apps from '@/components/template/Apps/Apps';
import Section from '@/components/layout/Section/Section';

export default function Index() {
  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Section>
        <Apps />
      </Section>
    </>
  );
}

// TODO: 아이콘 사용처에 대한 저작권 표시! FlatIcon
// <a href="https://www.flaticon.com/free-icons/paper-clip" title="paper clip icons">Paper clip icons created by Freepik - Flaticon</a>
