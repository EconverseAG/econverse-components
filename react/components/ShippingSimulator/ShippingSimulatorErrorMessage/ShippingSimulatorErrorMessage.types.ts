import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorErrorMessageHandles from './ShippingSimulatorErrorMessage.handles';

interface ShippingSimulatorErrorMessageProps {
  classes?: CssHandlesTypes.CustomClasses<
    typeof ShippingSimulatorErrorMessageHandles
  >;
}

export { ShippingSimulatorErrorMessageProps };
