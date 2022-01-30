import React, { ReactNode } from 'react';
import * as S from './Footer.styled';

type AppLayoutProps = {
  children: ReactNode;
};

const Footer = ({ children }: AppLayoutProps) => {
  return (
    <>
      <S.Footer>
        <div className='footer-inner'>{children}</div>
      </S.Footer>
    </>
  );
};

export default Footer;
