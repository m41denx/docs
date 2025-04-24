export default {
  title: "HYPRR - Документация",
  description: "Документация хостинга HYPRR",
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
            { text: 'Начало работы', link: '/wiki/getting-started' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'FAQ',
          items: [
            { text: 'Общие вопросы', link: '/faq/' },
            { text: 'Технические вопросы', link: '/faq/technical' }
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
