import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import ShippingSimulatorSubmitHandles from './ShippingSimulatorSubmit.handles';
import type { ShippingSimulatorSubmitProps } from './ShippingSimulatorSubmit.types';

function ShippingSimulatorSubmit({
  message = 'Calcular o frete',
  disableWhileInvalid,
}: ShippingSimulatorSubmitProps) {
  const { handles } = useCssHandles(ShippingSimulatorSubmitHandles);
  const { isPostalCodeValid } = useShippingSimulator();

  return (
    <button
      type="submit"
      className={handles.shippingSimulatorSubmit}
      disabled={disableWhileInvalid ? !isPostalCodeValid : false}
    >
      {message}
    </button>
  );
}

export default ShippingSimulatorSubmit;
