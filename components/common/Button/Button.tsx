import React, { useEffect, useState } from 'react';
import * as S from './Button.styled';
export interface BaseButtonProps {
  type: string;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Sizes = ['micro', 'small', 'medium', 'large'];
const Types = ['default', 'danger', 'confirm'];

const Button = ({
  type = 'confirm-small',
  text = '확인',
  disabled = false,
  onClick,
}: BaseButtonProps) => {
  const [className, setClassName] = useState('');
  const [isValidatePass, setIsValidatePass] = useState(true);

  useEffect(() => {
    const split = type.split('-');
    const isTypePass = Types.includes(split[0]);
    const isSizePass = Sizes.includes(split[1]);

    setClassName(type.replace('-', ' '));
    setIsValidatePass(isTypePass && isSizePass);

    if (!isTypePass || !isSizePass) {
      throw new Error('Please check the type prop');
    }
  }, []);

  return (
    <>
      {isValidatePass && (
        <S.BaseButton
          className={className}
          disabled={disabled}
          onClick={onClick}
        >
          {text}
        </S.BaseButton>
      )}
    </>
  );
};

export default Button;
