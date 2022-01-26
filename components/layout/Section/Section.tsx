import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}
const SectionWrap = styled.div`
  width: 100%;
  padding: 40px 2%;
`;
const Section = ({ children }: IProps) => {
  return <SectionWrap>{children}</SectionWrap>;
};

export default Section;
