export default {
  base: '/',
  title: "HYPRR - Документация",
  description: "Документация хостинга HYPRR.",
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Вики', link: '/wiki/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Туториалы', link: '/tutorials/' }
    ],
    sidebar: {
      '/wiki/': [
        {
          text: 'Вики',
          items: [
            { text: 'Введение', link: '/wiki/' },
            { text: 'Начало работы', link: '/wiki/getting-started' },
            { text: 'Список нод', link: '/wiki/hardware' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'FAQ',
          items: [
            { text: 'Общие вопросы', link: '/faq/' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Туториалы',
          items: [
            { text: 'Обзор', link: '/tutorials/' }
          ]
        }
      ]
    }
  }
}
