import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styled from 'styled-components';

import { ReducerType } from '@/reducer/index';
import { InitialState, setTheme } from '@/reducer/modules/auth.reducer';

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
  const theme = useSelector<ReducerType, string>(({ auth }) => auth.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    const state = {
      theme: theme === 'light' ? 'dark' : 'light',
    } as InitialState;
    dispatch(setTheme(state));
  };

  return (
    <>
      <ThemeButton onClick={handleTheme}>
        <Image src={`/icon-theme-${theme}.png`} layout='fill' />
      </ThemeButton>
    </>
  );
};

export default Header;
