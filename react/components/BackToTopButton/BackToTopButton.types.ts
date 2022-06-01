import type { CssHandlesTypes } from 'vtex.css-handles';

import type BackToTopButtonHandles from './BackToTopButton.handles';

interface BackToTopButtonProps {
  displayThreshold?: number;
  text?: string;
  children?: React.ReactNode;
  classes?: CssHandlesTypes.CustomClasses<typeof BackToTopButtonHandles>;
}

export { BackToTopButtonProps };
