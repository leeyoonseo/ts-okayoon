import React, { ReactNode } from 'react';
import * as S from './Footer.styled';

type AppLayoutProps = {
  children: ReactNode;
};

const Footer = ({ children }: AppLayoutProps) => {
  return (
    <>
      <S.Footer>
        <S.FooterInner>{children}</S.FooterInner>
      </S.Footer>
    </>
  );
};

export default Footer;
