export default {
  // base: process.env.VITEPRESS_BASE || '/',
  title: 'Pinguino project',
  description: 'Physical computing for everyone',
  footer: {
    copyright: 'Copyright © Regis Blanchot'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    es: {
      lang: 'es',
      label: 'Español',
      link: '/es',
      title: 'Proyecto Pinguino',
      description: 'Computación Física para todos'
    },
    pt: {
      lang: 'pt-BR',
      label: 'Portuguese',
      link: '/pt',
      title: 'Projeto Pinguino',
      description: 'Computação Física para todos'
    }
  },
  themeConfig: {
    repo: 'PinguinoIDE/pinguino-ide',
    docsRepo: 'PinguinoIDE/pinguinoide.github.io',
    docsDir: 'site',
    editLinks: true,
    lastUpdated: true,
      search: {
          provider: 'local'
      },
      i18nRouting: true,
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
          '/getting-started/join-us'
        ]
      },
      {
        title: 'Project News',
        collapsable: false,
        children: [
          '/news/',
          '/news/2022',
          '/news/2020'
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
}
