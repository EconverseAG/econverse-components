const IframeSchema = {
  title: 'Video',
  description: 'Iframe embed',
  type: 'object',
  properties: {
    enabled: {
      title: 'Ativo',
      type: 'boolean',
      default: true,
    },
    title: {
      title: 'Título',
      type: 'string',
      default: '',
    },
    src: {
      title: 'URL',
      type: 'string',
      default: '',
    },
    width: {
      title: 'Largura',
      type: 'number',
      default: '',
    },
    height: {
      title: 'Altura',
      type: 'number',
      default: '',
    },
    frameBorder: {
      title: 'Borda',
      type: 'number',
      default: '',
    },
    allowFullScreen: {
      title: 'Permitir tela cheia',
      type: 'boolean',
      default: false,
    },
    allow: {
      title: 'Permitir',
      type: 'string',
      default: '',
    },
  },
}

export default IframeSchema
