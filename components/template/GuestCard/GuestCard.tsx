import React from 'react';
import Link from 'next/link';
import TheAvatar from '@/components/common/Avatar/Avatar';
import {
  GuestCardWrap,
  GuestCardContents,
  // GuestCardButtonsWrap,
} from './GuestCard.styled';

export interface IGuestbook {
  guestbookId: string;
  guestbookDt: string; // TODO: 추후에는 Date객체
  userId: string;
  userNickname: string;
  message: string;
}
export interface IProps {
  content: IGuestbook;
}

const GuestCard = ({ content }: IProps) => {
  return (
    <Link href={`/guestbook/${encodeURIComponent(content.guestbookId)}`}>
      <GuestCardWrap>
        <div className='guestcard-inner'>
          <div className='guestcard-avatar'>
            <TheAvatar size='large' />
          </div>

          <GuestCardContents>
            <div className='info'>
              <span className='info-nickname'>{content.userNickname}</span>
              <span className='info-date'>{content.guestbookDt}</span>
            </div>

            <div
              className='message'
              dangerouslySetInnerHTML={{ __html: content.message }}
            ></div>
          </GuestCardContents>
        </div>
      </GuestCardWrap>
    </Link>
  );
};

export default GuestCard;
