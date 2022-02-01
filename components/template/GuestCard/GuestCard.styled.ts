import styled, { css } from 'styled-components';
import { Directions } from './GuestCard';

export const GuestCardWrap = styled.div`
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.reverse};
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.default};
  position: relative;
  box-sizing: border-box;

  ${(props) =>
    props.dir === Directions.VERTICAL &&
    css`
      height: 255px;
    `}

  ${(props) => props.dir === Directions.HORIZONTAL && css``}

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
    overflow: hidden;

    ${(props) =>
      props.dir === Directions.VERTICAL &&
      css`
        height: 220px;
        display: '-webkit-box';
        text-overflow: ellipsis;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      `}

    ${(props) =>
      props.dir === Directions.HORIZONTAL &&
      css`
        display: flex;
      `}
  }

  .guestcard-avatar {
    width: 80px;
    margin: 0 auto 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.dir === Directions.HORIZONTAL &&
      css`
        margin: 0 20px;
      `}
  }

  .guestcard-contents {
    width: 100%;

    ${(props) =>
      props.dir === Directions.HORIZONTAL &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}

    .info {
      text-align: center;
      margin-bottom: 4px;

      ${(props) =>
        props.dir === Directions.HORIZONTAL &&
        css`
          width: 100%;
        `}

      ${(props) =>
        props.dir === Directions.HORIZONTAL &&
        css`
          text-align: left;
        `}

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
  }
`;
