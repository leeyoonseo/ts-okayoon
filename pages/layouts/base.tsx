import { ReactNode } from 'react';
import { Layout } from 'antd';

import styled from 'styled-components';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const Wrapper = styled.div`
  background-color: #64c5ba;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(Layout.Content)`
  display: flex;
  padding: 0 2%;
  align-items: center;
  justify-content: center;
`;

type AppLayoutProps = {
  children: ReactNode;
};

export default function Base({ children }: AppLayoutProps) {
  return (
    <Wrapper>
      <Header />

      <Main>{children}</Main>

      <Footer>
        <div>Footer입니다.</div>
      </Footer>
    </Wrapper>
  );
}
