import styled, { css } from 'styled-components';

interface ITooltipProps {
  isVisible: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const TooltipLabel = styled.span<ITooltipProps>`
  position: absolute;
  transition: 0.25s;
  visibility: hidden;
  opacity: 0;
  bottom: 150%;
  transform: translateX(-50%);
  left: 50%;
  font-size: 14px;
  cursor: default;
  background: #000;
  color: #fff;
  padding: 4px 12px;
  box-sizing: content-box;
  white-space: nowrap;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    `};

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }
`;
