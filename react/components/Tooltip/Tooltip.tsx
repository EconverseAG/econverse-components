import React, { useState } from 'react';
import ITooltipProps from './Tooltip.types';
import { Wrapper, TooltipLabel } from './Tooltip.styles';

const Tooltip: React.FC<ITooltipProps> = ({
  label,
  children,
  borderRadius = '6px',
  color = '#fff',
  backgroundColor = '#000',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Wrapper>
      <TooltipLabel
        color={color}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        isVisible={isVisible}
      >
        {label}
      </TooltipLabel>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
    </Wrapper>
  );
};

export default Tooltip;
