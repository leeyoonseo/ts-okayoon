import styled from 'styled-components';
import { Layout } from 'antd';

export const Header = styled(Layout.Header)`
  padding: 0;
  height: auto;
  color: white;
  background: none;
`;

export const HeaderInner = styled.div`
  padding: 0 2%;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 30px;
  align-items: center;
  justify-content: flex-end;
`;
