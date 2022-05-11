const ToggleLayoutSchema = {
  title: 'ToggleLayout',
  description: 'Container que pode ter sua exibição ligada ou desligada',
  type: 'object',
  properties: {
    enabled: {
      title: 'Ativo',
      type: 'boolean',
      default: true,
    },
  },
};

export default ToggleLayoutSchema;
