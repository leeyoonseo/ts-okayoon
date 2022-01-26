import React from 'react';
import * as S from './GuestCard.styled';
import Avatar from '@/components/Common/Avatar/Avatar';
import { avatars } from '@/constants/index';

//
import styled from 'styled-components';

const GuestCardWrap = styled.div`
  width: 100%;
  background: white;
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
`;

const GuestCardInfoWrap = styled.div`
  display: flex;
`;

const AvatarWrap = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GuestCardInfo = styled.div`
  width: calc(100% - 100px);
`;

const Nickname = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 3px;
`;

const Date = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-size: 13px;
`;

const Message = styled.div`
  display: block;
  width: 100%;
`;

const GuestCardButtonsWrap = styled.div`
  display: flex;
  justify-content: end;
`;

const GuestCardButtons = styled.div`
  display: inline-block;
`;

const EditButton = styled.button`
  cursor: pointer;
`;
const RemoveButton = styled.button`
  cursor: pointer;
`;
//

const GuestCard = () => {
  return (
    <>
      <GuestCardWrap>
        <div>
          <GuestCardInfoWrap>
            <AvatarWrap>
              <Avatar size='large' />
            </AvatarWrap>

            <GuestCardInfo>
              <Nickname>닉네임</Nickname>
              <Date>2022.01.26 pm 10:22</Date>
              <Message>
                안녕하세요.
                <br />
                오늘은 날씨가 좋았어요.
                <br />
                아직은 겨울이지만 곧 봄이 오겠죠?
              </Message>
            </GuestCardInfo>
          </GuestCardInfoWrap>

          <GuestCardButtonsWrap>
            <GuestCardButtons>
              <EditButton>수정</EditButton>
              <RemoveButton>삭제</RemoveButton>
            </GuestCardButtons>
          </GuestCardButtonsWrap>
        </div>
      </GuestCardWrap>
    </>
  );
};

export default GuestCard;
