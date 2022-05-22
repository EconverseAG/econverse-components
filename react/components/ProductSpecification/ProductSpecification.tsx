import React from 'react';

import useProductSpecification from '../../useProductSpecification';
import { ProductSpecificationSchema } from './ProductSpecification.schema';
import type { ProductSpecificationProps } from './ProductSpecification.types';

function ProductSpecification({
  specificationName,
}: ProductSpecificationProps) {
  const specification = useProductSpecification(specificationName);

  return <span>{specification}</span>;
}

ProductSpecification.getSchema = () => ProductSpecificationSchema;

export default React.memo(ProductSpecification);
