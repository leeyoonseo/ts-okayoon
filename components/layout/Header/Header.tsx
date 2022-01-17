import React from 'react';
import * as S from './Header.styled';
import SystemTools from '@/components/template/SystemTools/SystemTools';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <SystemTools />
        </S.HeaderInner>
      </S.Header>
    </>
  );
};

export default Header;
