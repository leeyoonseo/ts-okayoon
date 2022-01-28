import styled from 'styled-components';

export const GuestbookWrap = styled.div`
  height: 80%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .guestbook {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    .guextbook-items {
      width: calc(25% - 12px);

      & + .guextbook-items {
        margin-left: 16px;
      }

      &:nth-child(4n + 1) {
        margin-left: 0;
      }

      &:nth-child(1n + 5) {
        margin-top: 16px;
      }
    }
  }
`;

export const GuestbookInputWrap = styled.div`
  form {
    padding: 16px 0;
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

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.secondary};
    }

    &:disabled {
      cursor: default;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;
