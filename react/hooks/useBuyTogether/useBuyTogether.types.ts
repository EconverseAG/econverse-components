import type { ProductTypes } from 'vtex.product-context';

interface BuyTogetherContextType {
  productsToBuyTogether: ProductTypes.Product[];
  hasBuyTogether: boolean;
}

interface BuyTogetherProviderProps {
  children: React.ReactNode;
  maxLength?: number;
}

export { BuyTogetherContextType, BuyTogetherProviderProps };
