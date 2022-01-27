import styled, { css } from 'styled-components';

export const CommonStyled = css`
  cursor: pointer;
  border: 1px solid #ccc;
  color: #333;
  border-radius: 8px;
  box-sizing: border-box;

  & + button {
    margin-left: 4px;
  }
`;

export const BaseButton = styled.button`
  ${CommonStyled}

  &.default {
    background: ${({ theme }) => theme.reverse};
    color: ${({ theme }) => theme.default};
  }

  &.confirm {
    background: ${({ theme }) => theme.secondary};
    color: white;
    border: none;
  }

  &.danger {
    background: ${({ theme }) => theme.dangerBgColor};
    border-color: ${({ theme }) => theme.dangerBorderColor};
    color: ${({ theme }) => theme.dangerColor};
  }

  &.large {
    width: 150px;
    height: 45px;
  }

  &.medium {
    width: 100px;
    height: 40px;
  }

  &.small {
    width: 60px;
    height: 30px;
  }

  &.micro {
    width: 40px;
    height: 30px;
  }
`;
