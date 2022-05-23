import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import type IframeProps from './Iframe.types';
import IframeSchema from './Iframe.schema';
import IframeHandles from './Iframe.handles';

function Iframe({
  enabled,
  src,
  title,
  width,
  height,
  frameBorder,
  allowFullScreen,
  allow,
  classes,
  ...rest
}: IframeProps) {
  const { handles } = useCssHandles(IframeHandles, { classes });

  return (
    <>
      {enabled && src && (
        <iframe
          className={handles['e-iframe']}
          title={title}
          src={src}
          frameBorder={frameBorder}
          width={width}
          height={height}
          allowFullScreen={allowFullScreen}
          allow={allow}
          {...rest}
        />
      )}
    </>
  );
}

Iframe.getSchema = () => IframeSchema;

export default Iframe;
