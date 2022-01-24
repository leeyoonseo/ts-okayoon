import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styled from 'styled-components';

import { ReducerType } from '@/reducer/index';
import { InitialState, setThemeMode } from '@/reducer/modules/auth.reducer';

const ThemeButton = styled.button`
  width: 18px;
  height: 18px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  const themeMode = useSelector<ReducerType, string>(
    ({ auth }) => auth.themeMode,
  );
  const dispatch = useDispatch();

  const handleTheme = () => {
    const state = {
      themeMode: themeMode === 'light' ? 'dark' : 'light',
    } as InitialState;
    dispatch(setThemeMode(state));
  };

  return (
    <>
      <ThemeButton onClick={handleTheme}>
        <Image src={`/icon-theme-${themeMode}.png`} layout='fill' />
      </ThemeButton>
    </>
  );
};

export default Header;
