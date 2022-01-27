import React, { useState, useCallback, useRef, useEffect } from 'react';
import Head from 'next/head';
import useInput from '@/hooks/useInput';
import Section from '@/components/layout/Section/Section';
import GuestCard from '@/components/template/GuestCard/GuestCard';

// Dummy
import { dummyGuestbookData } from '@/constants/dummy';

// Styled
import styled from 'styled-components';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const GuestbookWrap = styled.div`
  height: 75%;
  overflow-x: hidden;
  overflow-y: auto;
  /* background: rgba(0, 0, 0, 0.2); */
  /* border-radius: 20px; */
  padding: 20px;
  /* border-bottom: 2px solid #1d4b45; */

  &::-webkit-scrollbar {
    display: none;
  }

  .guestbook {
    padding: 0;
    margin: 0;

    .guextbook-items {
      & + .guextbook-items {
        margin-top: 12px;
      }
    }
  }
`;
const GuestbookInputWrap = styled.div`
  form {
    padding: 16px 20px;
  }

  .textarea-wrap {
    position: relative;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 16px 16px 30px 16px;
    border-radius: 15px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.default};
    resize: none;

    &::placeholder {
      color: white;
    }

    &:not(:placeholder-shown) {
      background: ${({ theme }) => theme.reverse};
    }

    &:focus {
      background: ${({ theme }) => theme.reverse};
      outline: none;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.default};
      }
    }
  }

  textarea:focus + .length,
  textarea:not(:placeholder-shown) + .length {
    color: ${({ theme }) => theme.default};
  }

  .length {
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 12px;
    color: white;
  }

  .submit-button {
    margin-top: 4px;
    width: 100%;
    height: 40px;
    color: white;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: ${({ theme }) => theme.secondary};
    }
  }
`;

const MAX_TEXTAREA_LENGTH = 100;

const Guestbook = () => {
  const textareaRef = useRef(null);
  const [message, onChangeMessage, setMessage] = useInput('');

  const handleBlur = useCallback(() => {
    if (message.length > MAX_TEXTAREA_LENGTH) {
      setMessage(message.substr(0, MAX_TEXTAREA_LENGTH));
    }
  }, [message]);

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  return (
    <>
      <Head>
        <title>OKAYOON | 방명록</title>
      </Head>

      <Section title='Guestbook'>
        <GuestbookWrap>
          <ol className='guestbook'>
            {dummyGuestbookData.map((guestbook) => (
              <li className='guextbook-items' key={guestbook.guestbookId}>
                <GuestCard content={guestbook} />
              </li>
            ))}
          </ol>
        </GuestbookWrap>

        <GuestbookInputWrap>
          <form>
            <div className='textarea-wrap'>
              <textarea
                ref={textareaRef}
                placeholder='방명록을 입력해주세요.'
                onChange={onChangeMessage}
                onBlur={handleBlur}
                value={message}
                maxLength={MAX_TEXTAREA_LENGTH}
                required
              />
              <span className='length'>{`${message.length}/${MAX_TEXTAREA_LENGTH}`}</span>
            </div>

            <button
              type='button'
              className='submit-button'
              onClick={handleSubmit}
            >
              등록
            </button>
          </form>
        </GuestbookInputWrap>
      </Section>
    </>
  );
};

export default Guestbook;
