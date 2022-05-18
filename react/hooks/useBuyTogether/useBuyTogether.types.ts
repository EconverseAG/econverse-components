import type { ProductTypes } from 'vtex.product-context';

interface BuyTogetherContextType {
  productsToBuyTogether: ProductTypes.Product[];
  hasBuyTogether: boolean;
}

interface BuyTogetherProviderProps {
  children: React.ReactNode;
  showUnavailable?: boolean;
}

export { BuyTogetherContextType, BuyTogetherProviderProps };
