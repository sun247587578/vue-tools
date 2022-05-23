// // 使用异步函数也是可以的
// export default ({
//   // Vue, // VuePress 正在使用的 Vue 构造函数
//   // options, // 附加到根实例的一些选项
//   // router, // 当前应用的路由实例
//   // siteData, // 站点元数据
//   // isServer // 当前应用配置是处于 服务端渲染 或 客户端
// }) => {
//   // ...做一些其他的应用级别的优化
// }

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../../src/assets/styles/index.scss' // global css

import "./styles/example.scss" // 示例文件中的css样式

// import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import directive from '@/directive' //directive
Vue.use(directive)

import hangtianUI from "/src/comps/index.js";
Vue.use(hangtianUI)

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
  }
}