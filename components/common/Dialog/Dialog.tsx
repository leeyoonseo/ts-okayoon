import React, { useState } from 'react';
import * as D from './Dialog.styled';

// visible: true, false
// type: confirm, alert
// title
// body
//

const Dialog = () => {
  return (
    <>
      <D.Overlay />
      <D.Wrap>
        <D.Contents>
          <D.Header>
            <D.Title>타이틀</D.Title>
            <D.CloseButton>
              <D.CloseIcon />
            </D.CloseButton>
          </D.Header>

          <D.Body>바디</D.Body>

          <D.Footer>
            <D.CancelButton color='red'>취소</D.CancelButton>
            <D.ConfirmButton>확인</D.ConfirmButton>
          </D.Footer>
        </D.Contents>
      </D.Wrap>
    </>
  );

  // return (
  //   <>
  //     <Overlay visible={visible} />
  //     <Wrap className={className} tabIndex='-1' visible={visible}>
  //       <Modal tabIndex='0' className='modal-inner'>
  //         {children}
  //       </Modal>
  //     </Wrap>
  //   </>
  // );
};

export default Dialog;
