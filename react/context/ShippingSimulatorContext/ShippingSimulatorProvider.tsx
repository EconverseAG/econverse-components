import React, { useCallback, useMemo, useState } from 'react';
import { isCep } from 'econverse-utils';
import { useApolloClient } from 'react-apollo';
import { useRuntime } from 'vtex.render-runtime';
import { useProduct } from 'vtex.product-context';

import type {
  ShippingEstimates,
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
  const [shippingEstimates, setShippingEstimates] = useState(
    {} as ShippingEstimates,
  );

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

    setShippingEstimates(result.data.shipping);
    setError('');
  }, [client, culture.country, postalCode, productContext]);

  const contextValue = useMemo(
    () => ({
      postalCode,
      setPostalCode,
      error,
      setError,
      shippingEstimates,
      hasError,
      isPostalCodeValid,
      updateShippingEstimates,
    }),
    [
      error,
      hasError,
      isPostalCodeValid,
      postalCode,
      shippingEstimates,
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
