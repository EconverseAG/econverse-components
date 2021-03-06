import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import type { ProductTypes } from 'vtex.product-context';
import { useProduct } from 'vtex.product-context';

import type { SimilarProductsProviderProps } from './SimilarProductsContext.types';
import { SimilarProductsContext } from './useSimilarProducts';

function SimilarProductsProvider({
  showUnavailable,
  children,
}: SimilarProductsProviderProps) {
  const [similarProducts, setSimilarProducts] = useState([]);

  const product = useProduct();

  const hasSimilarProducts = useMemo(() => similarProducts.length > 0, [
    similarProducts,
  ]);

  const getProductInfo = useCallback(async () => {
    const productId = product?.product?.productId;

    let { data } = await axios.get(
      `/api/catalog_system/pub/products/crossselling/similars/${productId}`,
    );

    if (!showUnavailable) {
      data = data.filter(
        (item: ProductTypes.Product) =>
          item?.items[0].sellers[0].commertialOffer.AvailableQuantity > 0,
      );
    }

    setSimilarProducts(data);
  }, [product, showUnavailable]);

  useEffect(() => {
    getProductInfo();
  }, [getProductInfo]);

  return (
    <SimilarProductsContext.Provider
      value={{
        similarProducts,
      }}
    >
      {hasSimilarProducts && children}
    </SimilarProductsContext.Provider>
  );
}

export { SimilarProductsProvider };
