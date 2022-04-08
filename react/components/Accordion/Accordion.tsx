import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import IAccordionProps from './Accordion.types';

import { Wrapper, Header, Title, Icon, Content } from './Accordion.styles';

const Accordion: React.FC<IAccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Icon isOpen={isOpen}>
          <RiArrowDownSLine />
        </Icon>
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </Wrapper>
  );
};

export default Accordion;
