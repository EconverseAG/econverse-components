import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorInputHandles from './ShippingSimulatorInputHandles';

interface ShippingSimulatorInputProps {
  placeholder?: string;
  classes?: CssHandlesTypes.CustomClasses<typeof ShippingSimulatorInputHandles>;
  customHandleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => void;
}

export { ShippingSimulatorInputProps };
