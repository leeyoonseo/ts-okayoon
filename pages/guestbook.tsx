import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Avatar from '@/components/Common/Avatar/Avatar';
import GuestCard from '@/components/template/GuestCard/GuestCard';
import { avatars } from '@/constants/index';

//
import styled from 'styled-components';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const VisiblePasswordButton = styled.button`
  cursor: pointer;
  font-size: 20px;

  & > * {
    color: white;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const Guestbook = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const handleVisiblePassword = useCallback(() => {
    setIsVisiblePassword(!isVisiblePassword);
  }, [isVisiblePassword]);
  return (
    <>
      <Head>
        <title>OKAYOON | 방명록</title>
      </Head>

      <ul>
        <li>
          <GuestCard />
        </li>
      </ul>
      <Avatar size='large' src={avatars[0].path} />
      <Avatar />
      <form>
        <textarea placeholder='방명록을 입력해주세요.' maxLength={100} />
        <div>
          <input placeholder='비밀번호' />
          <VisiblePasswordButton onClick={handleVisiblePassword}>
            {isVisiblePassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </VisiblePasswordButton>
        </div>
        <button>등록</button>
      </form>
    </>
  );
};

export default Guestbook;
