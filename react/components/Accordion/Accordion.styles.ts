import styled, { css } from 'styled-components';

interface IAccordionProps {
  isOpen: boolean;
}

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Icon = styled.div<IAccordionProps>`
  display: flex;
  align-items: center;
  transition: 0.35s;
  transform: ${({ isOpen }) =>
    isOpen ? css`rotate(180deg)` : css`rotate(0deg)`};
`;

export const Content = styled.div<IAccordionProps>`
  position: relative;
  overflow: hidden;
  transform: ${({ isOpen }) => (isOpen ? css`scaleY(1)` : css`scaleY(0)`)};
  padding-inline: 1rem;

  &,
  > * {
    transform-origin: top;
    transition: 0.35s ease-out;
  }

  > * {
    transform: ${({ isOpen }) => (isOpen ? css`scaleY(1)` : css`scaleY(2)`)};
  }
`;
