import React, { useCallback } from 'react';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import type { ShippingSimulatorFormProps } from './ShippingSimulator.types';

function ShippingSimulatorForm({
  customHandleSubmit,
  children,
}: ShippingSimulatorFormProps) {
  const { postalCode } = useShippingSimulator();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // eslint-disable-next-line no-console
      console.log('>>> submit', postalCode);
    },
    [postalCode],
  );

  return (
    <form
      onSubmit={
        customHandleSubmit
          ? (e) => customHandleSubmit(e, handleSubmit)
          : handleSubmit
      }
    >
      {children}
    </form>
  );
}

export default ShippingSimulatorForm;
