import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import ShippingSimulatorErrorMessageHandles from './ShippingSimulatorErrorMessage.handles';
import type { ShippingSimulatorErrorMessageProps } from './ShippingSimulatorErrorMessage.types';

function ShippingSimulatorErrorMessage({
  classes,
}: ShippingSimulatorErrorMessageProps) {
  const { handles } = useCssHandles(ShippingSimulatorErrorMessageHandles, {
    classes,
  });

  const { hasError, error } = useShippingSimulator();

  return <>{hasError && <p className={handles.errorMessage}>{error}</p>}</>;
}

export default ShippingSimulatorErrorMessage;
