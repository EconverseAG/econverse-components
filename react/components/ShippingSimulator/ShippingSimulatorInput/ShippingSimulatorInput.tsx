import React, { useCallback } from 'react';
import { formatCep } from 'econverse-utils';
import { useCssHandles } from 'vtex.css-handles';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import type { ShippingSimulatorInputProps } from './ShippingSimulatorInput.types';
import ShippingSimulatorInputHandles from './ShippingSimulatorInput.handles';

function ShippingSimulatorInput({
  customHandleChange,
  placeholder,
  cleanErrorsOnChange = true,
  classes,
  ...rest
}: ShippingSimulatorInputProps) {
  const { handles } = useCssHandles(ShippingSimulatorInputHandles, { classes });

  const { postalCode, setPostalCode, setError } = useShippingSimulator();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPostalCode = formatCep(e.target.value);

      if (cleanErrorsOnChange) setError('');

      setPostalCode(newPostalCode.slice(0, 9));
    },
    [cleanErrorsOnChange, setError, setPostalCode],
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
