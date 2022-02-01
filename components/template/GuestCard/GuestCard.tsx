import React, { useEffect, useState } from 'react';
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
  direction: string;
  content: IGuestbook;
}

export interface IDirections {
  HORIZONTAL: string;
  VERTICAL: string;
}

export const Directions = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as IDirections;

const GuestCard = ({ direction = Directions.HORIZONTAL, content }: IProps) => {
  const [dir, setDir] = useState(direction);

  useEffect(() => {
    if (!Object.keys(Directions).includes(direction)) {
      setDir(Directions.HORIZONTAL);
    }
  }, []);

  return (
    <Link href={`/guestbook/${encodeURIComponent(content.guestbookId)}`}>
      <GuestCardWrap dir={dir}>
        <div className='guestcard-inner'>
          <div className='guestcard-avatar'>
            <TheAvatar size='large' />
          </div>

          <div className='guestcard-contents'>
            <div className='info'>
              <span className='info-nickname'>{content.userNickname}</span>
              <span className='info-date'>{content.guestbookDt}</span>
            </div>

            <div
              className='message'
              dangerouslySetInnerHTML={{ __html: content.message }}
            ></div>
          </div>
        </div>
      </GuestCardWrap>
    </Link>
  );
};

export default GuestCard;
