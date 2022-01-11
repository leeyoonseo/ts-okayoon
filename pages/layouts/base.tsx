import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const Wrapper = styled.div`
  background-color: #64c5ba;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

type AppLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>

      <Footer>
        <div>Footer입니다.</div>
      </Footer>
    </Wrapper>
  );
}
