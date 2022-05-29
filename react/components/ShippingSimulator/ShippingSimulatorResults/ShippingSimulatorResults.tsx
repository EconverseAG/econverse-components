import React from 'react';
import { FormattedCurrency } from 'vtex.format-currency';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import TranslatedEstimate from '../TranslatedEstimate';
import type { ShippingSimulatorResultsProps } from './ShippingSimulatorResults.types';

function ShippingSimulatorResults({
  readOnly,
  showTableHeader,
}: ShippingSimulatorResultsProps) {
  const { logisticsInfo } = useShippingSimulator();

  return (
    <>
      {!!logisticsInfo?.length && (
        <table>
          {showTableHeader && (
            <thead>
              <tr>
                <th>Entrega</th>
                <th>Prazo</th>
                <th>Valor</th>
              </tr>
            </thead>
          )}
          <tbody>
            {logisticsInfo[0].slas.map((item) => (
              <tr key={item.id}>
                {readOnly ? (
                  <td>{item.friendlyName}</td>
                ) : (
                  <td>
                    <label>
                      <input
                        name="shipping-option"
                        type="radio"
                        value={item.id}
                      />
                      {item.friendlyName}
                    </label>
                  </td>
                )}
                <td>
                  <TranslatedEstimate
                    shippingEstimate={item.shippingEstimate}
                  />
                </td>
                <td>
                  {item.price > 0 ? (
                    <FormattedCurrency value={item.price / 100} />
                  ) : (
                    'Grátis'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ShippingSimulatorResults;
