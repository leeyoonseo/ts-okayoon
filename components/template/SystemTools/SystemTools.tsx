import React, { useState } from 'react';
import * as S from './SystemTools.styled';
import ToolWifi from '@/components/template/ToolWifi/ToolWifi';
import Battery from '@/components/template/Battery/Battery';
import Clock from '@/components/template/Clock/Clock';

export interface IProps {
  time: Date;
}

const SystemTools = () => {
  const [isSoundActivated, setIsSoundActivated] = useState(true);
  const [time, setTime] = useState(new Date());

  const props = {
    time,
  };

  const handleSound = () => {
    setIsSoundActivated(!isSoundActivated);
  };

  return (
    <S.Wrapper>
      <S.Box>
        <ToolWifi />
      </S.Box>
      {/* TODO: 로그인, 로그아웃 넣고 삭제 */}
      <S.Box>
        {isSoundActivated ? (
          <S.SoundIcon onClick={handleSound} />
        ) : (
          <S.StopIcon onClick={handleSound} />
        )}
      </S.Box>
      <S.Box>
        <Battery {...props} />
      </S.Box>
      <S.Box>
        <Clock {...props} />
      </S.Box>
    </S.Wrapper>
  );
};

export default SystemTools;
