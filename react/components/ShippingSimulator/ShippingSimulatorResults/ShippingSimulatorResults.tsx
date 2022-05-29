import React from 'react';
import { FormattedCurrency } from 'vtex.format-currency';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import TranslatedEstimate from '../TranslatedEstimate';
import type { ShippingSimulatorResultsProps } from './ShippingSimulatorResults.types';

function ShippingSimulatorResults({ readOnly }: ShippingSimulatorResultsProps) {
  const { logisticsInfo } = useShippingSimulator();

  return (
    <>
      {!!logisticsInfo?.length && (
        <div>
          {logisticsInfo[0].slas.map((item) => (
            <div key={item.id}>
              {readOnly ? (
                <span>{item.friendlyName}</span>
              ) : (
                <label>
                  <input name="shipping-option" type="radio" value={item.id} />
                  {item.friendlyName}
                </label>
              )}
              <span>
                <TranslatedEstimate shippingEstimate={item.shippingEstimate} />
              </span>
              <span>
                {item.price > 0 ? (
                  <FormattedCurrency value={item.price / 100} />
                ) : (
                  'Grátis'
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ShippingSimulatorResults;
