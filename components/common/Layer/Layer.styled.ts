// Styled
import styled from 'styled-components';
//

export const Overlay = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const LayerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  align-items: center;
  justify-content: center;

  .layer {
    padding: 20px;
    width: 400px;
    height: 300px;
    border-radius: 20px;
    background: ${({ theme }) => theme.reverse};
  }

  .layer-header {
    position: relative;
    align-items: center;
    display: flex;
    margin-bottom: 15px;
    min-height: 30px;
  }

  .layer-title {
    font-size: 18px;
    width: calc(100% - 20px);
    color: ${({ theme }) => theme.default};
    display: inline-block;
  }

  .layer-close-button {
    margin-left: auto;
    width: 12px;
    height: 12px;
    padding: 0;
    cursor: pointer;
    background-image: ${({ theme }) => `url(/icon-close-${theme.name}.png)`};
    background-repeat: no-repeat;
    background-size: cover;

    img {
      width: 100%;
      height: auto;
    }
  }

  .layer-contents {
    color: ${({ theme }) => theme.default};
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 45px);
  }
`;
