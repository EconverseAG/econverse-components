import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import ShippingSimulatorSubmitHandles from './ShippingSimulatorSubmit.handles';
import type { ShippingSimulatorSubmitProps } from './ShippingSimulatorSubmit.types';

function ShippingSimulatorSubmit({
  message = 'Calcular o frete',
}: ShippingSimulatorSubmitProps) {
  const { handles } = useCssHandles(ShippingSimulatorSubmitHandles);

  return (
    <button type="submit" className={handles.shippingSimulatorSubmit}>
      {message}
    </button>
  );
}

export default ShippingSimulatorSubmit;
