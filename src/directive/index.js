import dialogDrag from './dialog/drag'
import drctDrag from './myDrag/index'

const install = function(Vue) {
  Vue.directive('dialogDrag', dialogDrag)
  Vue.directive('drctDrag', drctDrag)
}

if (window.Vue) {
  window['dialogDrag'] = dialogDrag
  window['drctDrag'] = drctDrag
  Vue.use(install); // eslint-disable-line
}

export default install
