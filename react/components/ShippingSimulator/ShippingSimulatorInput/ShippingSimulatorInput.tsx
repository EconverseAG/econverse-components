import React, { useCallback } from 'react';
import { formatCep } from 'econverse-utils';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import type { ShippingSimulatorInputProps } from './ShippingSimulatorInput.types';

function ShippingSimulatorInput({
  customHandleChange,
  ...rest
}: ShippingSimulatorInputProps) {
  const { postalCode, setPostalCode } = useShippingSimulator();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPostalCode = formatCep(e.target.value);

      setPostalCode(newPostalCode.slice(0, 9));
    },
    [setPostalCode],
  );

  return (
    <input
      type="text"
      onChange={
        customHandleChange
          ? (e) => customHandleChange(e, handleChange)
          : handleChange
      }
      value={postalCode}
      data-testid="shippingSimulatorInput"
      {...rest}
    />
  );
}

export default ShippingSimulatorInput;
