import React from 'react';
import Link from 'next/link';
import * as S from './Header.styled';
import SystemTools from '@/components/template/SystemTools/SystemTools';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.Logo>
            <Link href='/'>OKAYOON</Link>
          </S.Logo>
          <SystemTools />
        </S.HeaderInner>
      </S.Header>
    </>
  );
};

export default Header;
