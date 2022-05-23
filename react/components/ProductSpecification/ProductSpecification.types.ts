import type { CssHandlesTypes } from 'vtex.css-handles';

import type ProductSpecificationHandles from './ProductSpecification.handles';

interface ProductSpecificationProps {
  specificationName: string;
  classes?: CssHandlesTypes.CustomClasses<typeof ProductSpecificationHandles>;
}

export { ProductSpecificationProps };
