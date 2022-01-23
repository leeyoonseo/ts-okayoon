import styled from 'styled-components';
import { SoundOutlined, StopOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  line-height: 1 !important;
  display: flex;
  align-items: center;
  vertical-align: top;

  button {
    line-height: 1 !important;
    vertical-align: middle;
  }
`;

export const Box = styled.div`
  display: inline-block;
  vertical-align: middle;

  & + div {
    margin-left: 7px;
  }
`;

export const SoundIcon = styled(SoundOutlined)`
  font-size: 18px;
  color: white;
`;

export const StopIcon = styled(StopOutlined)`
  font-size: 18px;
  color: white;
`;
