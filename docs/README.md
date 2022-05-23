---
home: true
heroImage: /home.png
title: a
actionText: 开始使用 →
actionLink: /comps/
features:
  - title: 丰富功能
    details: 提炼了典型的业务模型，提供了丰富的功能组件
  - title: 最佳实践
    details: 合理的框架选择，良好的工程实践助你持续产出高质量代码
  - title: 最新技术栈
    details: 使用 vue/vuex/vue-router/element 等前端前沿技术开发
  # - title: 最牛的领导团队
  #   details: 根据权限动态加载路由，渲染侧边栏
  # - title: 国际化
  #   details: 内建业界通用的国际化方案
  # - title: 主题
  #   details: 支持多种动态换肤功能
footer: MIT Licensed | Copyright © 2022 Sunjing
---
## 文档目录 源

- `src/assets:` 用于存放框架的静态资源 css、图片等一些公告资源
- `src/directive:` 自研的vue指令
- `src/lib:` 存放第三方依赖
- `src/utils:` 存放自研的常用的js工具方法
- `src/**:` 后续功能正在开发中 

------------------------

## 文档项目配置
- `docs/.vuepress:` 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components:` 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme:` 用于存放本地主题。
- `docs/.vuepress/styles:` 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl:` 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl:` 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public:` 静态资源目录。
- `docs/.vuepress/templates:` 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html:` 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html:` 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js:` 配置文件的入口文件，也可以是 YML 或 toml。
- `docs/.vuepress/enhanceApp.js:` 客户端应用的增强。



