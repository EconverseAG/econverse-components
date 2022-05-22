const ProductSpecificationSchema = {
  title: 'Especificação de produto',
  type: 'object',
  properties: {
    specificationName: {
      title: 'Nome da especificação',
      type: 'string',
    },
  },
};

export { ProductSpecificationSchema };
