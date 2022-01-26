import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as S from './Avatar.styled';
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
        <S.TheAvatar
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
        </S.TheAvatar>
      ) : (
        <S.DefaultAvatar size={width} icon={<UserOutlined />} />
      )}
    </>
  );
};

export default Avatar;

// * Example
// https://ant.design/components/avatar/
// <Avatar size='large' src={avatars[0].path} />
