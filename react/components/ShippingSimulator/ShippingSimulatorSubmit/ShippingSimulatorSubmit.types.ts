import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorSubmitHandles from './ShippingSimulatorSubmit.handles';

interface ShippingSimulatorSubmitProps {
  message?: string;
  classes?: CssHandlesTypes.CustomClasses<
    typeof ShippingSimulatorSubmitHandles
  >;
}

export { ShippingSimulatorSubmitProps };
