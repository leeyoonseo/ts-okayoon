import React, { Fragment, ReactNode } from 'react';
import { Overlay, LayerWrapper } from './Layer.styled';

interface ILayer {
  title: string;
  children: ReactNode;
  activated: boolean;
  handleClose: () => void;
}

const Layer = ({ activated, handleClose, title, children }: ILayer) => {
  return (
    <>
      {activated ? (
        <Fragment>
          <Overlay />
          <LayerWrapper>
            <div className='layer'>
              <div className='layer-header'>
                <strong className='layer-title'>{title}</strong>
                <button className='layer-close-button' onClick={handleClose}>
                  <span className='hidden'>닫기</span>
                </button>
              </div>
              <div className='layer-contents'>{children}</div>
            </div>
          </LayerWrapper>
        </Fragment>
      ) : null}
    </>
  );
};

export default Layer;
