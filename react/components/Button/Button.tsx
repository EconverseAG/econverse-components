import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import ButtonHandles from './Button.handles';
import type { ButtonProps } from './Button.types';

function Button({
  onClick,
  classes,
  text,
  type = 'button',
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const { handles } = useCssHandles(ButtonHandles, { classes });

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${handles.button} pointer bw0 flex justify-center items-center`}
      {...rest}
    >
      {text ?? children}
    </button>
  );
}

export default Button;
