import { ReactNode } from 'react';
import Header from '@/components/layouts/Header/Header';

type AppLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <h1>BaseLayout</h1>
      <main>{children}</main>
    </>
  );
}
