import styled from 'styled-components';

export const GuestCardWrap = styled.div`
  width: 100%;
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
    margin-bottom: 4px;

    & > span {
      display: block;
    }

    &-nickname {
      text-align: center;
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

export const GuestCardButtonsWrap = styled.div`
  display: inline-block;
  position: absolute;
  top: 6px;
  right: 16px;
  line-height: 1px;

  button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 0;
    display: inline-block;
  }

  button + button {
    margin-left: 4px;
  }

  .menu-trigger {
    background-image: ${({ theme }) =>
      `url('./icon-three-dots-${theme.name}.png')`};
  }

  .menu-wrapper:hover {
    .menu {
      display: flex;
    }
  }

  /* TODO: 삭제, 수정 디테일 페이지 만들기 [_id] */
  .menu {
    background: ${({ theme }) => theme.reverse};
    border: 1px solid ${({ theme }) => theme.default};
    position: absolute;
    top: 18px;
    left: -35px;
    z-index: 50;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 6px;
    text-align: center;

    button + button {
      margin-left: 6px;
    }

    .edit-button {
      background-image: ${({ theme }) =>
        `url('./icon-edit-${theme.name}.png')`};
    }

    .delete-button {
      background-image: ${({ theme }) =>
        `url('./icon-delete-${theme.name}.png')`};
    }
  }
`;
