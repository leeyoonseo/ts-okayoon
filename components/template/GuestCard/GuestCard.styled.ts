import styled from 'styled-components';
import { Button } from 'antd';

export const MoreWrap = styled.div`
  text-align: center;
`;

export const MoreButton = styled(Button)`
  padding: 10px 25px;
  height: auto;
  line-height: 1;
  border: 1px solid #333;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #333;
    border: 1px solid #333;
    background: none;
  }

  &:hover {
    opacity: 0.5;
  }
`;
