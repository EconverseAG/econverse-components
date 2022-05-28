import React, { useMemo, useState } from 'react';
import { isCep } from 'econverse-utils';

import type { ShippingSimulatorProviderProps } from './ShippingSimulatorContext.types';
import { ShippingSimulatorContext } from './useShippingSimulator';

function ShippingSimulatorProvider({
  children,
}: ShippingSimulatorProviderProps) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const hasError = useMemo(() => !!error, [error]);
  const isPostalCodeValid = useMemo(() => isCep(postalCode), [postalCode]);

  const contextValue = useMemo(
    () => ({
      postalCode,
      setPostalCode,
      error,
      setError,
      hasError,
      isPostalCodeValid,
    }),
    [error, hasError, isPostalCodeValid, postalCode],
  );

  return (
    <ShippingSimulatorContext.Provider value={contextValue}>
      {children}
    </ShippingSimulatorContext.Provider>
  );
}

export { ShippingSimulatorProvider };
