import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { FormattedCurrency } from 'vtex.format-currency';

import { useShippingSimulator } from '../../../context/ShippingSimulatorContext';
import TranslatedEstimate from '../TranslatedEstimate';
import ShippingSimulatorResultsHandles from './ShippingSimulatorResults.handles';
import type { ShippingSimulatorResultsProps } from './ShippingSimulatorResults.types';

function ShippingSimulatorResults({
  readOnly,
  showTableHeader,
  classes,
}: ShippingSimulatorResultsProps) {
  const { handles } = useCssHandles(ShippingSimulatorResultsHandles, {
    classes,
  });

  const { logisticsInfo } = useShippingSimulator();

  return (
    <>
      {!!logisticsInfo?.length && (
        <table className={handles.shippingSimulatorResults}>
          {showTableHeader && (
            <thead className={handles.tableHeader}>
              <tr>
                <th>Entrega</th>
                <th>Prazo</th>
                <th>Valor</th>
              </tr>
            </thead>
          )}
          <tbody className={handles.tableBody}>
            {logisticsInfo[0].slas.map(
              ({ friendlyName, price, shippingEstimate }) => (
                <tr key={friendlyName} className={handles.tableRow}>
                  {readOnly ? (
                    <td
                      className={`${handles.tableCell} ${handles.shippingName}`}
                    >
                      {friendlyName}
                    </td>
                  ) : (
                    <td
                      className={`${handles.tableCell} ${handles.shippingOption}`}
                    >
                      <label className={handles.shippingOptionLabel}>
                        <input
                          name="shipping-option"
                          type="radio"
                          value={friendlyName}
                          className={handles.shippingOptionInput}
                        />
                        {friendlyName}
                      </label>
                    </td>
                  )}
                  <td
                    className={`${handles.tableCell} ${handles.shippingEstimate}`}
                  >
                    <TranslatedEstimate shippingEstimate={shippingEstimate} />
                  </td>
                  <td className={`${handles.tableCell} ${handles.price}`}>
                    {price > 0 ? (
                      <FormattedCurrency value={price / 100} />
                    ) : (
                      'Grátis'
                    )}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ShippingSimulatorResults;
