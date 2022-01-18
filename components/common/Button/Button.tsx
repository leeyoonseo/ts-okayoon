import React from 'react';
import { BaseButton } from './Button.styled';
import * as CSS from 'csstype';

export interface BaseButtonProps {
  disabled?: boolean;
  style?: CSS.Properties;
  size?: string;
  name: string;
  text?: string;
  handleClick?: () => void;
}

const Button = ({
  name,
  style,
  size = 'medium',
  disabled = false,
  text = '',
  handleClick,
}: BaseButtonProps) => {
  return (
    <BaseButton
      size={size}
      disabled={disabled}
      name={name}
      style={style}
      onClick={handleClick}
    >
      {text}
    </BaseButton>
  );
};

export default Button;
