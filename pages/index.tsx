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
