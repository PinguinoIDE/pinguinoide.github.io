module.exports = {
  title: 'Pinguino project',
  description: 'Physical computing for everyone',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pinguino project',
      description: 'Physical computing for everyone',
    },
    '/es/': {
      lang: 'es-AR',
      title: 'Proyecto Pinguino',
      description: 'Computación física para todos',
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-160403552-1' // UA-00000000-0
      }
    ]
  ]
}
