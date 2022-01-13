import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './SystemTools.styled';
import ToolWifi from '@/components/page/ToolWifi/ToolWifi';
import Battery from '@/components/page/Battery/Battery';

const SystemTools = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleSetSound = () => {
    console.log('?');
    setIsMuted(!isMuted);
  };

  return (
    <S.Wrapper>
      <S.Box>
        <ToolWifi />
      </S.Box>
      {/* TODO: 로그인, 로그아웃 넣고 삭제 */}
      <S.Box>
        {isMuted ? (
          <S.SoundIcon onClick={handleSetSound} />
        ) : (
          <S.StopIcon onClick={handleSetSound} />
        )}
      </S.Box>
      <S.Box>
        <Battery />
      </S.Box>
      <S.Box>SystemTools</S.Box>
    </S.Wrapper>
  );
};

export default SystemTools;
