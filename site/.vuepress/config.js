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
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Projeto Pinguino',
      description: 'Computação física para todos',
    }
  },
  themeConfig: {
    repo: 'PinguinoIDE/pinguino-ide',
    docsRepo: 'PinguinoIDE/pinguinoide.github.io',
    docsDir: 'site',
    editLinks: true,
    lastUpdated: true,
    nav: [
      { text: 'Community', link: 'https://github.com/PinguinoIDE/pinguinoide.github.io/discussions' },
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/getting-started/',
          '/getting-started/download',
          '/getting-started/join-us',
          '/news/'
        ]
      },
      {
        title: 'Pinguino IDE v13',
        collapsable: false,
        children: [
          '/pinguino-ide-v13/'
        ]
      },
      {
        title: 'Pinguino Boards',
        collapsable: false,
        children: [
          '/pinguino-boards/',
          '/pinguino-boards/supported-boards-8',
          '/pinguino-boards/supported-boards-32',
          '/pinguino-boards/buy',
          '/pinguino-boards/DIY'
        ]
      },
      {
        title: 'Language Reference',
        collapsable: false,
        children: [
          '/language-reference/',
          '/language-reference/wiring-base',
          '/language-reference/1wire'
        ]
      },
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-160403552-1' // UA-00000000-0
      }
    ]
  ]
};
