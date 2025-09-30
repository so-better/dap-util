import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/dap-util/',
  title: 'dap-util',
  description: '一个轻量的前端JavaScript工具库，专注于JavaScript，不关心UI',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.so-better.cn/ico.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' }]
  ],
  outDir: 'dap-util',
  cleanUrls: true,
  themeConfig: {
    logo: {
      src: 'https://www.so-better.cn/logo.png'
    },
    outline: {
      label: '本页目录',
      level: [2, 5]
    },
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide' },
      { text: '更新日志', link: '/changelog' }
    ],
    sidebar: {
      '/guide': [
        {
          text: '开始使用',
          items: [
            {
              text: '简介',
              link: '/guide/introduction'
            },
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '快速上手',
              link: '/guide/quick-start'
            }
          ]
        },
        {
          text: '模块',
          items: [
            {
              text: 'color',
              link: '/guide/modules/color'
            },
            {
              text: 'common',
              link: '/guide/modules/common'
            },
            {
              text: 'data',
              link: '/guide/modules/data'
            },
            {
              text: 'element',
              link: '/guide/modules/element'
            },
            {
              text: 'event',
              link: '/guide/modules/event'
            },
            {
              text: 'file',
              link: '/guide/modules/file'
            },
            {
              text: 'number',
              link: '/guide/modules/number'
            },
            {
              text: 'platform',
              link: '/guide/modules/platform'
            },
            {
              text: 'speech',
              link: '/guide/modules/speech'
            },
            {
              text: 'string',
              link: '/guide/modules/string'
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/dap-util' },
      { icon: 'gitee', link: 'https://gitee.com/so-better/dap-util' },
      { icon: 'github', link: 'https://github.com/so-better/dap-util' }
    ],
    search: { provider: 'local' },
    lastUpdated: {
      text: '上次更新'
    },
    docFooter: {
      prev: 'Prev',
      next: 'Next'
    },
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchLabel: '主题风格切换',
    sidebarMenuLabel: '菜单目录',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    theme: {
      dark: 'github-dark',
      light: 'github-light'
    },
    codeCopyButtonTitle: '复制代码'
  },
  vite: {
    server: {
      port: 5402
    }
  }
})
