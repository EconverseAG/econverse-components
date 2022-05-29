import React, { useCallback, useMemo, useState } from 'react';
import { isCep } from 'econverse-utils';
import { useApolloClient } from 'react-apollo';
import { useRuntime } from 'vtex.render-runtime';
import { useProduct } from 'vtex.product-context';

import type {
  LogisticsInfo,
  ShippingSimulatorProviderProps,
} from './ShippingSimulatorContext.types';
import { ShippingSimulatorContext } from './useShippingSimulator';
import getShippingEstimates from '../../graphql/getShippingEstimates.gql';
import getDefaultSeller from '../../utils/getDefaultSeller';

function ShippingSimulatorProvider({
  children,
}: ShippingSimulatorProviderProps) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');
  const [logisticsInfo, setLogisticsInfo] = useState([] as LogisticsInfo[]);

  const productContext = useProduct();
  const client = useApolloClient();
  const { culture } = useRuntime();

  const hasError = useMemo(() => !!error, [error]);
  const isPostalCodeValid = useMemo(() => isCep(postalCode), [postalCode]);

  const updateShippingEstimates = useCallback(async () => {
    const result = await client
      .query({
        query: getShippingEstimates,
        variables: {
          postalCode,
          country: culture.country,
          items: [
            {
              id: productContext?.selectedItem?.itemId,
              quantity: productContext?.selectedQuantity?.toString(),
              seller: getDefaultSeller(productContext?.selectedItem?.sellers)
                ?.sellerId,
            },
          ],
        },
      })
      .catch((err) => {
        setError('could not calculate shipping');

        console.error(err);
      });

    if (!result || !result?.data.shipping.logisticsInfo.length) {
      setError('no shipping available');

      return;
    }

    setLogisticsInfo(result.data.shipping.logisticsInfo);
    setError('');
  }, [client, culture, postalCode, productContext]);

  const contextValue = useMemo(
    () => ({
      postalCode,
      setPostalCode,
      error,
      setError,
      logisticsInfo,
      hasError,
      isPostalCodeValid,
      updateShippingEstimates,
    }),
    [
      error,
      hasError,
      isPostalCodeValid,
      postalCode,
      logisticsInfo,
      updateShippingEstimates,
    ],
  );

  return (
    <ShippingSimulatorContext.Provider value={contextValue}>
      {children}
    </ShippingSimulatorContext.Provider>
  );
}

export { ShippingSimulatorProvider };
