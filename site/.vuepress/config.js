const fs = require("fs");
const path = require("path");

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
  themeConfig: {
    repo: 'PinguinoIDE/pinguino-ide',
    docsRepo: 'PinguinoIDE/pinguinoide.github.io',
    docsDir: 'site',
    editLinks: true,
    lastUpdated: true,
    nav: [
      { text: 'News', link: '/news/' },
      { text: 'Get Start', link: '/getting-started/' },
      { text: 'Community', link: 'https://github.com/PinguinoIDE/pinguinoide.github.io/discussions' },
    ],
    sidebar: {
      '/news/': getSideBar('news', 'News'),
      '/getting-started/': getSideBar('getting-started', 'Documentation'),
      '/boards/': getSideBar('boards', 'Board Reference'),
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
};

// Thanks to https://techformist.com/automatic-dynamic-sidebar-vuepress/
function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
      );

  return [{ title: title, children: ["", ...files] }];
}
