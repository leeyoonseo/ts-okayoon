import styled from 'styled-components';
import { Avatar } from 'antd';

export const TheAvatar = styled(Avatar)`
  /* box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2); */
  background: ${({ theme }) => theme.tertiary};

  .ant-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DefaultAvatar = styled(Avatar)`
  /* box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2); */
  background: ${({ theme }) => theme.tertiary};
`;
