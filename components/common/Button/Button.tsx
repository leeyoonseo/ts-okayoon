import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  disabled: boolean;
  name: string;
  children: ReactNode;
}

const ButtonStyled = styled.button`
  width: 180px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;

  ${(props) => (() => `background: ${props.theme.colors[`${props.name}`]};`)()}

  &:hover:not(:disabled) {
    ${(props) =>
      (() => {
        return `background: ${props.theme.colors[`dark${props.name}`]};`;
      })()}
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`;

const Button = ({ name, disabled, children }: BaseButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} name={name}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
