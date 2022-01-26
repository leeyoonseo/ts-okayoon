import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Section from '@/components/layout/Section/Section';
import GuestCard from '@/components/template/GuestCard/GuestCard';

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

const GuestbookOutputWrap = styled.div``;
const GuestbookInputWrap = styled.div``;

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

      <Section>
        <GuestbookOutputWrap>
          <ol>
            <li>
              <GuestCard />
            </li>
          </ol>
        </GuestbookOutputWrap>

        <GuestbookInputWrap>
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
        </GuestbookInputWrap>
      </Section>
    </>
  );
};

export default Guestbook;
