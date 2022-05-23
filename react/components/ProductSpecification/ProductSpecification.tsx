import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import useProductSpecification from '../../useProductSpecification';
import ProductSpecificationHandles from './ProductSpecification.handles';
import { ProductSpecificationSchema } from './ProductSpecification.schema';
import type { ProductSpecificationProps } from './ProductSpecification.types';

function ProductSpecification({
  specificationName,
  classes,
  ...rest
}: ProductSpecificationProps) {
  const { handles } = useCssHandles(ProductSpecificationHandles, { classes });

  const specification = useProductSpecification(specificationName);

  return (
    <span className={handles['e-productSpecification']} {...rest}>
      {specification}
    </span>
  );
}

ProductSpecification.getSchema = () => ProductSpecificationSchema;

export default React.memo(ProductSpecification);
