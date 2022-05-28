import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorFormHandles from './ShippingSimulatorForm.handles';

interface ShippingSimulatorFormProps {
  children: React.ReactNode;
  classes?: CssHandlesTypes.CustomClasses<typeof ShippingSimulatorFormHandles>;
  customHandleSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    callback: (event: React.FormEvent<HTMLFormElement>) => void,
  ) => void;
}

export { ShippingSimulatorFormProps };
