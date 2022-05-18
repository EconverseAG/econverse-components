import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import axios from 'axios';
import type { ProductTypes } from 'vtex.product-context';
import { useProduct } from 'vtex.product-context';

import type {
  BuyTogetherContextType,
  BuyTogetherProviderProps,
} from './useBuyTogether.types';

const BuyTogetherContext = createContext({} as BuyTogetherContextType);
const useBuyTogether = () => useContext(BuyTogetherContext);

function BuyTogetherProvider({ children }: BuyTogetherProviderProps) {
  const [productsToBuyTogether, setProductsToBuyTogether] = useState([]);

  const product = useProduct();

  const hasBuyTogether = useMemo(() => productsToBuyTogether.length > 0, [
    productsToBuyTogether,
  ]);

  const getProductInfo = useCallback(async () => {
    const productId = product?.product?.productId;

    const { data } = await axios.get(
      `/api/catalog_system/pub/products/crossselling/showtogether/${productId}`,
    );

    const availableProducts = data.filter(
      (item: ProductTypes.Product) =>
        item?.items[0].sellers[0].commertialOffer.AvailableQuantity > 0,
    );

    setProductsToBuyTogether(availableProducts);
  }, [product]);

  useEffect(() => {
    getProductInfo();
  }, [getProductInfo]);

  const value = useMemo(
    () => ({
      productsToBuyTogether,
      hasBuyTogether,
    }),
    [productsToBuyTogether, hasBuyTogether],
  );

  return (
    <BuyTogetherContext.Provider value={value}>
      {children}
    </BuyTogetherContext.Provider>
  );
}

export { BuyTogetherProvider, BuyTogetherContext, useBuyTogether };
