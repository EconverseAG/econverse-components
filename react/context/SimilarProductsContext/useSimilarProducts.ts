import { createContext, useContext } from 'react';

import type { SimilarProductsContextType } from './SimilarProductsContext.types';

const SimilarProductsContext = createContext({} as SimilarProductsContextType);
const useSimilarProducts = () => useContext(SimilarProductsContext);

export { SimilarProductsContext, useSimilarProducts };
