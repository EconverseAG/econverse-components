import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorInputHandles from './ShippingSimulatorInput.handles';

interface ShippingSimulatorInputProps {
  title?: string;
  placeholder?: string;
  cleanErrorsOnChange?: boolean;
  classes?: CssHandlesTypes.CustomClasses<typeof ShippingSimulatorInputHandles>;
  customHandleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => void;
}

export { ShippingSimulatorInputProps };
