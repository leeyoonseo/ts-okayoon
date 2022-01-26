import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '@/reducer/index';
import { Layout } from 'antd';

import styled, { ThemeProvider } from 'styled-components';
import { themes } from '@/assets/styles/theme';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(Layout.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type AppLayoutProps = {
  children: ReactNode;
};

export default function Base({ children }: AppLayoutProps) {
  const router = useRouter();
  const themeMode = useSelector<ReducerType, string>(
    ({ auth }) => auth.themeMode,
  );
  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Wrapper>
        <Header />
        <Main>{children}</Main>

        {router.pathname === '/' && (
          <Footer>Copyright 2022. Web Front-end developer portfolio</Footer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}
