import type { CssHandlesTypes } from 'vtex.css-handles';

import type IframeHandles from './Iframe.handles';

interface IframeProps {
  enabled: boolean;
  width: number;
  height: number;
  title: string;
  src?: string;
  frameBorder?: number;
  allowFullScreen?: boolean;
  allow?: string;
  classes?: CssHandlesTypes.CustomClasses<typeof IframeHandles>;
}

export default IframeProps;
