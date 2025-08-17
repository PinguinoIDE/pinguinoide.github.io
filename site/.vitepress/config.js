export default {
  base: process.env.VITEPRESS_BASE || '/',
  title: 'Pinguino project',
  description: 'Physical computing for everyone',
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
        text: 'Getting Started',
        collapsable: false,
        link: '/getting-started',
        items: [
          { text: 'Download', link: '/getting-started/download' },
          { text: 'Join Us', link: '/getting-started/join-us' }
        ]
      },
      {
        text: 'Project News',
        link: '/news',
        items: [
          { text: '2022', link: '/news/2022' },
          { text: '2020', link: '/news/2020' }
        ]
      },
      { text: 'Pinguino IDE v13', link: '/pinguino-ide-v13' },
      {
        text: 'Pinguino Boards',
        link: '/pinguino-boards',
        collapsable: false,
        items: [
          { text: '8-bit Supported Boards', link: '/pinguino-boards/supported-boards-8' },
          { text: '32-bit Supported Boards', link: '/pinguino-boards/supported-boards-32' },
          { text: 'Buy a Board', link: '/pinguino-boards/buy' },
          { text: 'Do it Yourself!', link: '/pinguino-boards/DIY' }
        ]
      },
      {
        text: 'Language Reference',
        collapsable: false,
        link: '/language-reference',
        items: [
          { text: 'Wiring Base', link: '/language-reference/wiring-base' },
          { text: '1Wire', link: '/language-reference/1wire' }
        ]
      },
    ],
    footer: {
      copyright: 'Copyright © Regis Blanchot'
    }
  }
}
