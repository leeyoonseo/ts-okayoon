import styled from 'styled-components';

export const Apps = styled.ul`
  padding: 0;
  max-width: 600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .app-items {
    width: 15%;

    & + .app-items {
      margin-left: 2%;
    }
  }

  .app-button {
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: translateY(-10px);
    }
  }

  .app-name {
    font-size: 16px;
    margin-top: 5px;
    display: inline-block;
    color: ${({ theme }) => theme.default};
  }
`;

export const IconWrap = styled.span`
  display: inline-block;
  padding: 40%;
  height: 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
