import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Wrap = styled.div`
  box-sizing: border-box;
  display: block;
  /* display: ${(props) => (props.visible ? 'block' : 'none')}; */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const Overlay = styled.div`
  box-sizing: border-box;
  display: block;
  /* display: ${(props) => (props.visible ? 'block' : 'none')}; */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Contents = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  margin-left: auto;
  cursor: pointer;
`;

export const CloseIcon = styled(CloseOutlined)`
  width: 20px;
  height: 20px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Title = styled.strong`
  font-weight: 800;
  width: 100%;
  font-size: 18px;
`;

export const Body = styled.div`
  padding: 30px 0;
  text-align: center;
`;

export const Footer = styled.div`
  text-align: right;
`;
