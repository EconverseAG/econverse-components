import type { CssHandlesTypes } from 'vtex.css-handles';

import type ShippingSimulatorResultsHandles from './ShippingSimulatorResults.handles';

interface ShippingSimulatorResultsProps {
  readOnly?: boolean;
  showTableHeader?: boolean;
  classes?: CssHandlesTypes.CustomClasses<
    typeof ShippingSimulatorResultsHandles
  >;
}

export { ShippingSimulatorResultsProps };
