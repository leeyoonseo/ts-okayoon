import styled from 'styled-components';
import { Layout } from 'antd';

export const Footer = styled(Layout.Footer)`
  margin-top: auto;
  margin-bottom: 10px;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
  max-height: 30px;
  color: white;
  background: black;
  box-sizing: border-box;
  background: ${({ theme }) => theme.primary};

  .footer-inner {
    position: relative;
    display: flex;
    min-height: 30px;
    align-items: center;
    justify-content: center;
  }
`;
