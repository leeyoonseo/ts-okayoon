import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-block;
  max-width: 600px;
  width: 100%;
`;

export const AppButton = styled.button`
  padding: 0;
  max-width: 15%;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: translateY(-10px);
  }

  & + button {
    margin-left: 2%;
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

export const Name = styled.span`
  margin-top: 5px;
  display: inline-block;
  line-height: 1.25;
`;
