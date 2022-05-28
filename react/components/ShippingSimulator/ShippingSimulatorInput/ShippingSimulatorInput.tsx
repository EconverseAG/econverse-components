import React, { useCallback } from 'react';
import { formatCep } from 'econverse-utils';
import { useCssHandles } from 'vtex.css-handles';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import type { ShippingSimulatorInputProps } from './ShippingSimulatorInput.types';
import ShippingSimulatorInputHandles from './ShippingSimulatorInput.handles';

function ShippingSimulatorInput({
  customHandleChange,
  placeholder,
  classes,
  ...rest
}: ShippingSimulatorInputProps) {
  const { handles } = useCssHandles(ShippingSimulatorInputHandles, { classes });

  const { postalCode, setPostalCode } = useShippingSimulator();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPostalCode = formatCep(e.target.value);

      setPostalCode(newPostalCode.slice(0, 9));
    },
    [setPostalCode],
  );

  return (
    <>
      <input
        type="text"
        onChange={
          customHandleChange
            ? (e) => customHandleChange(e, handleChange)
            : handleChange
        }
        value={postalCode}
        data-testid="shippingSimulatorInput"
        placeholder={placeholder}
        className={handles.shippingSimulatorInput}
        {...rest}
      />
    </>
  );
}

export default ShippingSimulatorInput;
