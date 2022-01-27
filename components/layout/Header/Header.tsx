import React from 'react';
import Link from 'next/link';
import * as S from './Header.styled';
import SystemTools from '@/components/template/SystemTools/SystemTools';

const Header = () => {
  return (
    <>
      <S.Header>
        <div className='header-inner'>
          <S.Logo>
            <Link href='/'>OKAYOON</Link>
          </S.Logo>

          <SystemTools />
        </div>
      </S.Header>
    </>
  );
};

export default Header;
