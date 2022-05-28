import React, { useMemo, useState } from 'react';

import type { ShippingSimulatorProviderProps } from './ShippingSimulatorContext.types';
import { ShippingSimulatorContext } from './useShippingSimulator';

function ShippingSimulatorProvider({
  children,
}: ShippingSimulatorProviderProps) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const hasError = useMemo(() => !!error, [error]);

  const contextValue = useMemo(
    () => ({
      postalCode,
      setPostalCode,
      error,
      setError,
      hasError,
    }),
    [error, hasError, postalCode],
  );

  return (
    <ShippingSimulatorContext.Provider value={contextValue}>
      {children}
    </ShippingSimulatorContext.Provider>
  );
}

export { ShippingSimulatorProvider };
