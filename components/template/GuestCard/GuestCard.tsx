import React from 'react';
import TheAvatar from '@/components/common/Avatar/Avatar';
import BaseButton from '@/components/common/Button/Button';

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

// Styled
import styled from 'styled-components';

const GuestCardWrap = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.reverse};
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.default};

  .guestcard-inner {
    display: flex;
  }

  .guestcard-avatar {
    width: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const GuestCardContents = styled.div`
  width: calc(100% - 165px);
  padding: 0 16px;

  .info {
    margin-bottom: 3px;

    & > span {
      display: inline-block;
    }

    &-nickname {
    }

    &-date {
      margin-left: 8px;
      font-size: 12px;
      color: #666;
    }
  }

  .message {
    display: block;
    width: 100%;
  }
`;

const GuestCardButtonsWrap = styled.div`
  width: 85px;

  justify-content: end;

  & > div {
    display: inline-block;
  }
`;

const GuestCard = ({ content }: IProps) => {
  const handleEdit = () => {
    console.log('Edit');
  };

  const handleRemove = () => {
    console.log('Remove');
  };
  return (
    <>
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

          {/* TODO: 이건 작성자거나 관리자만 확인할 수 있도록. */}
          <GuestCardButtonsWrap>
            <div>
              <BaseButton
                type='default-micro'
                text='수정'
                onClick={handleEdit}
              />
              <BaseButton
                type='danger-micro'
                text='삭제'
                onClick={handleRemove}
              />
            </div>
          </GuestCardButtonsWrap>
        </div>
      </GuestCardWrap>
    </>
  );
};

export default GuestCard;
