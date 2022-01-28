import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Avatar as antdAvatar } from 'antd';

const TheAvatar = styled(antdAvatar)`
  .ant-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

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

const Avatar = ({ src, nickname, size }: IProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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
        <TheAvatar size={width} icon={<UserOutlined />} />
      )}
    </>
  );
};

export default Avatar;

// * Example
// https://ant.design/components/avatar/
// <Avatar size='large' src={avatars[0].path} />
