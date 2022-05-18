import React, { useEffect } from 'react';

import ToggleLayoutSchema from './ToggleLayout.schema';
import type ToggleLayoutProps from './ToggleLayout.types';

function ToggleLayout({ enabled, children }: ToggleLayoutProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('>>> TESTEEE');
  }, []);

  return <>{enabled && children}</>;
}

ToggleLayout.getSchema = () => ToggleLayoutSchema;

export default ToggleLayout;
