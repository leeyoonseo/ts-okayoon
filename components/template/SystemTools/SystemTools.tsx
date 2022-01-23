import React, { useState } from 'react';
import * as S from './SystemTools.styled';
import ToolWifi from '@/components/template/ToolWifi/ToolWifi';
import Battery from '@/components/template/Battery/Battery';
import Clock from '@/components/template/Clock/Clock';
import Theme from '@/components/template/Theme/Theme';

export interface Props {
  time: Date;
}

const SystemTools = () => {
  const [isSoundActivated, setIsSoundActivated] = useState(true);
  const [time, setTime] = useState(new Date());
  const handleSound = () => {
    setIsSoundActivated(!isSoundActivated);
  };

  return (
    <S.Wrapper>
      {/* TODO: 로그인, 로그아웃 넣고 삭제 */}
      <S.Box>
        {isSoundActivated ? (
          <S.SoundIcon onClick={handleSound} />
        ) : (
          <S.StopIcon onClick={handleSound} />
        )}
      </S.Box>
      <S.Box>
        <Theme />
      </S.Box>
      <S.Box style={{ marginLeft: '5px' }}>
        <ToolWifi />
      </S.Box>
      <S.Box>
        <Battery time={time} />
      </S.Box>
      <S.Box>
        <Clock time={time} />
      </S.Box>
    </S.Wrapper>
  );
};

export default SystemTools;
