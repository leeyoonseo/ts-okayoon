import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '@/reducer/index';

import styled, { ThemeProvider } from 'styled-components';
import { themes } from '@/assets/styles/theme';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

interface AppLayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: none;
`;

export default function Base({ children }: AppLayoutProps) {
  const router = useRouter();
  const isMain: boolean = router.pathname === '/';
  const themeMode = useSelector<ReducerType, string>(
    ({ auth }) => auth.themeMode,
  );
  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Wrapper>
        <Header />

        <Main
          style={{
            height: `calc(100% - ${isMain ? '70px' : '30px'})`,
          }}
        >
          {children}
        </Main>

        {isMain && (
          <Footer>Copyright 2022. Web Front-end developer portfolio</Footer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}
