import styled from 'styled-components';
import { SoundOutlined, StopOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  line-height: 1 !important;

  button {
    line-height: 1 !important;
  }
`;

export const Box = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const SoundIcon = styled(SoundOutlined)`
  font-size: 18px;
  color: white;
`;

export const StopIcon = styled(StopOutlined)`
  font-size: 18px;
  color: white;
`;
