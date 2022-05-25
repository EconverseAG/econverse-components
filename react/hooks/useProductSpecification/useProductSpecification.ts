import { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';

function useProductSpecification(specificationName: string) {
  const [specificationValue, setSpecificationValue] = useState('');

  const product = useProduct();

  useEffect(() => {
    if (!specificationName) return;

    const value = product?.product?.properties.find(
      (item) => item.name.toLowerCase() === specificationName.toLowerCase(),
    )?.values[0];

    if (!value) return;

    setSpecificationValue(value);
  }, [specificationName, product]);

  return specificationValue;
}

export default useProductSpecification;
