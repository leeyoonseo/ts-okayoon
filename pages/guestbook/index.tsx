import React, { useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import Head from 'next/head';

// * 참고  https://www.carlrippon.com/using-lodash-debounce-with-react-and-ts/
// import { debounce } from 'lodash';

import useInput from '@/hooks/useInput';
import Section from '@/components/layout/Section/Section';
import GuestCard from '@/components/template/GuestCard/GuestCard';
import { GuestbookWrap, GuestbookInputWrap } from './index.styled';

// Dummy
import { dummyGuestbookData, dummyUser } from '@/constants/dummy';

const MAX_TEXTAREA_LENGTH = 100;
interface IGuestbook {
  guestbookId: number;
  guestbookDt: string;
  userId: string;
  userNickname: string;
  message: string;
}

const Guestbook = () => {
  const textareaRef = useRef(null);
  const [isActivatedSubmit, setIsActivatedSubmit] = useState(false);
  const [guestbook, setGuestbook] = useState<IGuestbook[]>([]);
  const [message, onChangeMessage, setMessage] = useInput('');

  useEffect(() => {
    // TODO: Guestbook fetch
    setGuestbook(dummyGuestbookData);
  }, []);

  useEffect(() => {
    setIsActivatedSubmit(message.length >= 1);
  }, [message]);

  const handleBlur = useCallback(() => {
    if (message.length > MAX_TEXTAREA_LENGTH) {
      const maxLengthMessage = message.substr(0, MAX_TEXTAREA_LENGTH);
      setMessage(maxLengthMessage);
    }
  }, [message]);

  const handleSubmit = () => {
    if (!isActivatedSubmit) {
      alert('방명록 글을 입력하고 등록해주세요.');
      return;
    }
    const { userId, userNickname } = dummyUser;
    const lastIndex = guestbook[guestbook.length - 1].guestbookId;
    const currentTime = dayjs(new Date()).format('YYYY.MM.DD A h:mm:ss');

    const payload = {
      userId,
      userNickname,
      guestbookId: lastIndex + 1,
      guestbookDt: currentTime,
      message,
    };

    console.log('handleSubmit', payload);

    setGuestbook(guestbook.concat(payload));
    setMessage(''); // 리셋
  };

  return (
    <>
      <Head>
        <title>OKAYOON | 방명록</title>
      </Head>

      <Section>
        <GuestbookWrap>
          <ol className='guestbook'>
            {guestbook &&
              guestbook.map((guestbook) => (
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
              disabled={!isActivatedSubmit}
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
