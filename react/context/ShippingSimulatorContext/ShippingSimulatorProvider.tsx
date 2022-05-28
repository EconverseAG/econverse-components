import React, { useMemo, useState } from 'react';

import type { ShippingSimulatorProviderProps } from './ShippingSimulatorContext.types';
import { ShippingSimulatorContext } from './useShippingSimulator';

function ShippingSimulatorProvider({
  children,
}: ShippingSimulatorProviderProps) {
  const [postalCode, setPostalCode] = useState('');

  const contextValue = useMemo(
    () => ({
      postalCode,
      setPostalCode,
    }),
    [postalCode, setPostalCode],
  );

  return (
    <ShippingSimulatorContext.Provider value={contextValue}>
      {children}
    </ShippingSimulatorContext.Provider>
  );
}

export { ShippingSimulatorProvider };
