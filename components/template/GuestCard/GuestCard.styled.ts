import styled from 'styled-components';

export const GuestCardWrap = styled.div`
  width: 100%;
  height: 255px;
  cursor: pointer;
  background: ${({ theme }) => theme.reverse};
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.default};
  position: relative;
  box-sizing: border-box;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    left: 50%;
    z-index: 50;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: ${({ theme }) =>
      `url('./icon-clip-${theme.name}.png') no-repeat`};
    background-size: contain;
  }

  .guestcard-inner {
    height: 220px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  .guestcard-avatar {
    width: 80px;
    margin: 0 auto 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GuestCardContents = styled.div`
  width: 100%;

  .info {
    text-align: center;
    margin-bottom: 4px;

    & > span {
      display: block;
    }

    &-nickname {
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-date {
      font-size: 12px;
      color: #666;
    }
  }

  .message {
    display: block;
    width: 100%;
  }
`;
