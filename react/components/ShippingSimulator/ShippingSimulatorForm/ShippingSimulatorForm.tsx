import React, { useCallback } from 'react';
import { useCssHandles } from 'vtex.css-handles';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import type { ShippingSimulatorFormProps } from './ShippingSimulator.types';
import ShippingSimulatorFormHandles from './ShippingSimulatorForm.handles';

function ShippingSimulatorForm({
  customHandleSubmit,
  classes,
  children,
}: ShippingSimulatorFormProps) {
  const { handles } = useCssHandles(ShippingSimulatorFormHandles, { classes });
  const { postalCode, setError, isPostalCodeValid } = useShippingSimulator();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isPostalCodeValid) {
        setError('invalid postal code');

        return;
      }

      // eslint-disable-next-line no-console
      console.log('>>> postal code', postalCode, 'is valid!');
    },
    [isPostalCodeValid, postalCode, setError],
  );

  return (
    <form
      className={handles.shippingSimulatorForm}
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
