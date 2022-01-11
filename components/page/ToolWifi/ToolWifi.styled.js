import styled, { keyframes } from 'styled-components';

const color = 'white';
const animationOption = '1.5s infinite linear';

const appearIn = () => keyframes`
    0%{ border-top-color: transparent; }
    25%{ border-top-color: ${color}; }
    75%{ border-top-color: ${color}; }
    100%{ border-top-color: ${color}; }
`;

const appearMiddle = () => keyframes`
    0%{ border-top-color: transparent; }
    25%{ border-top-color: transparent; }
    75%{ border-top-color: ${color}; }
    100%{ border-top-color: ${color}; }
`;

const appearOut = () => keyframes`
    0%{ border-top-color: transparent; }
    25%{ border-top-color: transparent; }
    75%{ border-top-color: transparent; }
    100%{ border-top-color: ${color}; }
`;

export const OutLine = styled.div`
  border: 2px solid transparent;
  border-radius: 100%;
  position: relative;
  top: 2px;
  margin: 0 auto;
  width: 25px;
  height: 20px;
  border-top-color: ${color};
  animation: ${appearOut()} ${animationOption};

  .line {
    border-top-color: ${color};
  }
`;

export const MiddleLine = styled.div`
  border: 2px solid transparent;
  border-radius: 100%;
  margin: 1px auto;
  width: 18px;
  height: 15px;
  animation: ${appearMiddle()} ${animationOption};
`;

export const InLine = styled.div`
  border: 2px solid transparent;
  border-radius: 100%;
  margin: 1px auto;
  width: 14px;
  height: 13px;
  animation: ${appearIn()} ${animationOption};
`;

export const Dot = styled.div`
  border: 2px solid transparent;
  border-radius: 100%;
  margin: 2px auto;
  width: 3px;
  height: 3px;
  border: 0;
  background: ${color};
`;
