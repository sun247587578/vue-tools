var gen = require("./genSidebar.js");
module.exports = {
  title: '航天智信',
  description: '航天智信前端vue组件工具库',
  locales:{
    
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  themeConfig: {
    nav: [
      
      {
        text: 'vue组件',
        link: '/comps/'
      },
      {
        text: 'vue过滤器',
        link: '/vue-filters/'
      },
      {
        text: 'vue指令',
        link: '/directive/'
      },
      {
        text: 'css工具类',
        link: '/css-utils/'
      },
      {
        text: 'js工具类',
        link: '/js-utils/'
      },
    ],
    // @vuepress/theme-default/components/DropdownLink
    sidebarDepth:3,
    sidebar:{
      '/comps/': gen.getDefaultBar("comps"),
      '/directive/': gen.getDefaultBar("directive"),
      '/vue-filters/': gen.getDefaultBar("vue-filters"),
      '/css-utils/': gen.getDefaultBar("css-utils"),
      '/js-utils/': gen.getDefaultBar("js-utils"),
    },
    // sidebar: [
    //   {
    //     title:"comps",
    //     collspan:false,
    //     children:gen.getDefaultBar("comps")
    //   },
    //   {
    //     title:"directive",
    //     collspan:false,
    //     children:gen.getDefaultBar("directive"),
    //   },
    //   {
    //     title:"vue-filter",
    //     collspan:false,
    //     children:gen.getDefaultBar("vue-filters"),
    //   },
    //   {
    //     title:"css-utils",
    //     collspan:false,
    //     children:gen.getDefaultBar("css-utils"),
    //   },
    //   {
    //     title:"js-utils",
    //     collspan:false,
    //     children:gen.getDefaultBar("js-utils"),
    //   },
    // ]
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}