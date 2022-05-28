import { createContext, useContext } from 'react';

import type { ShippingSimulatorContextType } from './ShippingSimulatorContext.types';

const ShippingSimulatorContext = createContext(
  {} as ShippingSimulatorContextType,
);

const useShippingSimulator = () => useContext(ShippingSimulatorContext);

export { ShippingSimulatorContext, useShippingSimulator };
