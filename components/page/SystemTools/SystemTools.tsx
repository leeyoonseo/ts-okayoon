import React from 'react';
// import { useSelector } from 'react-redux';

import * as S from './SystemTools.styled';
import ToolWifi from '@/components/page/ToolWifi/ToolWifi';

const SystemTools = () => {
  // const { isMuted } = useSelector((state) => state.site);

  return (
    <S.Wrapper>
      <S.Box>
        <ToolWifi />
      </S.Box>
      <S.Box>{/* <S.SoundIcon className={isMuted && 'active'} /> */}</S.Box>
      <S.Box>SystemTools</S.Box>
    </S.Wrapper>
  );
};

export default SystemTools;
