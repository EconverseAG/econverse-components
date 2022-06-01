import type { CssHandlesTypes } from 'vtex.css-handles';

import type ButtonHandles from './Button.handles';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: CssHandlesTypes.CustomClasses<typeof ButtonHandles>;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: React.ReactNode;
}

export { ButtonProps };
