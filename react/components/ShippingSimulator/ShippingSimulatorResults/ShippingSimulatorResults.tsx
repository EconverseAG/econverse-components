import React from 'react';
import { FormattedCurrency } from 'vtex.format-currency';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import TranslatedEstimate from '../TranslatedEstimate';
import type { ShippingSimulatorResultsProps } from './ShippingSimulatorResults.types';

function ShippingSimulatorResults({ readOnly }: ShippingSimulatorResultsProps) {
  const { shippingEstimates } = useShippingSimulator();

  return (
    <>
      {shippingEstimates?.logisticsInfo?.length && (
        <div>
          {shippingEstimates?.logisticsInfo[0].slas.map((shippingEstimate) => (
            <div key={shippingEstimate.id}>
              {readOnly ? (
                <span>{shippingEstimate.friendlyName}</span>
              ) : (
                <label>
                  <input
                    name="shipping-option"
                    type="radio"
                    value={shippingEstimate.id}
                  />
                  {shippingEstimate.friendlyName}
                </label>
              )}
              <span>
                <TranslatedEstimate
                  shippingEstimate={shippingEstimate.shippingEstimate}
                />
              </span>
              <span>
                {shippingEstimate.price > 0 ? (
                  <FormattedCurrency value={shippingEstimate.price / 100} />
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
