import React, { useState, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
// 여기 이 두 컨테이너는 DOM에서 형제 관계입니다.

interface IProps {
  children: ReactNode;
}
const Modal = ({ children }: IProps) => {
  const [render, setRender] = useState(null);
  // const el: HTMLDivElement = document.createElement('div');
  const el: any = (): any => {
    return (
      <div
        ref={(el: any) => {
          setRender(el);
        }}
      >
        테스트
      </div>
    );
  };
  useEffect(() => {
    const modalRoot: HTMLElement | null = document.getElementById('modal-root');

    if (modalRoot && render) {
      modalRoot.appendChild(el);
    }

    return () => {
      if (modalRoot) {
        modalRoot.removeChild(el);
      }
    };
  }, [render]);

  return render && ReactDOM.createPortal(children, el);
};

export default Modal;
