import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  children: ReactNode;
}
const SectionWrap = styled.div`
  width: 100%;
  padding: 24px 2%;
  box-sizing: border-box;
  height: 100%;

  .section-title {
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.default};
  }
`;

const Section = ({ title, children }: IProps) => {
  return (
    <SectionWrap>
      {title && <h2 className='section-title'>{title}</h2>}
      {children}
    </SectionWrap>
  );
};

export default Section;
