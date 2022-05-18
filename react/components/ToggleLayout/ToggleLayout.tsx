import React from 'react';

import ToggleLayoutSchema from './ToggleLayout.schema';
import type ToggleLayoutProps from './ToggleLayout.types';

function ToggleLayout({ enabled, children }: ToggleLayoutProps) {
  return <>{enabled && children}</>;
}

ToggleLayout.getSchema = () => ToggleLayoutSchema;

export default ToggleLayout;
