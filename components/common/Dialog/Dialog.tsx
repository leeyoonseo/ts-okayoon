import React, { useState, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as D from './Dialog.styled';
import BaseButton from '@/components/common/Button/Button';
export interface IDialog {
  type: string;
  title: string;
  message: string;
  handleClose: () => void;
  callback?: () => void;
}

export const TYPE = {
  ALERT: 'alert',
  CONFIRM: 'confirm',
};
export const CONFIRM = 'confirm';

const Dialog = ({
  type = TYPE.ALERT,
  title = '안내',
  message,
  handleClose,
  callback,
}: IDialog) => {
  const handleCancel = (): void => {
    console.log('handleCancel');
    handleClose();
  };

  const handleConfirm = (): void => {
    console.log('handleConfirm');
    handleClose();
    callback && callback();
  };

  return (
    <>
      <D.Overlay />
      <D.Wrap>
        <D.Contents>
          <D.Header>
            <D.Title>{title}</D.Title>
            <D.CloseButton onClick={handleCancel}>
              <D.CloseIcon />
            </D.CloseButton>
          </D.Header>

          <D.Body>{message}</D.Body>

          <D.Footer>
            {type === TYPE.CONFIRM ? (
              <BaseButton
                name='gray'
                size='small'
                text='취소'
                handleClick={handleCancel}
                style={{
                  marginRight: '10px',
                }}
              />
            ) : null}
            <BaseButton
              name='primary'
              size='small'
              text='확인'
              handleClick={handleConfirm}
            />
          </D.Footer>
        </D.Contents>
      </D.Wrap>
    </>
  );
};

export default Dialog;
