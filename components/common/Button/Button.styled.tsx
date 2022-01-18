import { BaseButtonProps } from './Button';
import styled from 'styled-components';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const BaseButton = styled.button`
  width: ${({ size }: BaseButtonProps) => {
    switch (size) {
      case SIZE.SMALL:
        return '80px';
      case SIZE.LARGE:
        return '150px';
      default:
        return '120px';
    }
  }};
  height: 40px;
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
