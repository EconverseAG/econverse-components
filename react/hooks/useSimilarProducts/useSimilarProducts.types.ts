import type { ProductTypes } from 'vtex.product-context';

interface SimilarProductsContextType {
  similarProducts: ProductTypes.Product[];
}

interface SimilarProductsProviderProps {
  children: React.ReactNode;
  showUnavailable?: boolean;
}

export { SimilarProductsContextType, SimilarProductsProviderProps };
