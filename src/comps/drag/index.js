import htDrag from './src/drag';

/* istanbul ignore next */
htDrag.install = function(Vue) {
  Vue.component(htDrag.name, htDrag);
};

export default htDrag;
