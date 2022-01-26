import React, { useEffect, useState } from 'react';
import { Avatar as AntdAvatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface IProps {
  src?: string;
  nickname?: string;
  size?: string;
}

const Sizes = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const TheAvatar = styled(AntdAvatar)`
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.tertiary};

  .ant-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DefaultAvatar = styled(AntdAvatar)`
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.tertiary};
`;

const Avatar = ({ src, nickname, size }: IProps) => {
  const [width, setWidth] = useState(NaN);
  const [height, setHeight] = useState(NaN);

  useEffect(() => {
    let avatarSize = 36;

    switch (size) {
      case Sizes.LARGE:
        avatarSize = 64;
        break;
      case Sizes.SMALL:
        avatarSize = 32;
        break;
      case Sizes.MEDIUM:
      default:
        avatarSize = 48;
        break;
    }

    setWidth(avatarSize);
    setHeight(avatarSize);
  }, []);

  return (
    <>
      {(src || nickname) && width ? (
        <TheAvatar
          size={width}
          src={
            <Image
              preview={false}
              src={src}
              style={{
                width: `${width}px`,
                height: `${height}px`,
              }}
            />
          }
        >
          {nickname && nickname}
        </TheAvatar>
      ) : (
        <DefaultAvatar size={width} icon={<UserOutlined />} />
      )}
    </>
  );
};

export default Avatar;

// * Example
// ReactDOM.render(
//   <>
//     <Avatar icon={<UserOutlined />} />
//     <Avatar>U</Avatar>
//     <Avatar size={40}>USER</Avatar>
//     <Avatar src="https://joeschmoe.io/api/v1/random" />
//     <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
//     <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
//     <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
//   </>,
//   mountNode,
// );
