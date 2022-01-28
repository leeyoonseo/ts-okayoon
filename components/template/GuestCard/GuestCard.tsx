import React, { useState } from 'react';
import TheAvatar from '@/components/common/Avatar/Avatar';
import {
  GuestCardWrap,
  GuestCardContents,
  GuestCardButtonsWrap,
} from './GuestCard.styled';

interface IGuestbook {
  guestbookId: number;
  guestbookDt: string; // TODO: 추후에는 Date객체
  userId: string;
  userNickname: string;
  message: string;
}
interface IProps {
  content: IGuestbook;
}

const GuestCard = ({ content }: IProps) => {
  return (
    <>
      <GuestCardWrap>
        <div className='guestcard-inner'>
          <GuestCardButtonsWrap>
            <div className='menu-wrapper'>
              <button className='menu-trigger'>
                <span className='hidden'>카드메뉴</span>
              </button>

              <div className='menu'>
                <button className='edit-button'>
                  <span className='hidden'>수정</span>
                </button>
                <button className='delete-button'>
                  <span className='hidden'>삭제</span>
                </button>
              </div>
            </div>
          </GuestCardButtonsWrap>

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
    </>
  );
};

export default GuestCard;
