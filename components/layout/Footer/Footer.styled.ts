import styled from 'styled-components';
import { Layout } from 'antd';

export const Footer = styled(Layout.Footer)`
  margin-top: auto;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
  color: white;
  background: black;
  box-sizing: border-box;
  background: ${({ theme }) => theme.primary};
`;

export const FooterInner = styled.div`
  position: relative;
  padding: 10px 2%;
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
`;
