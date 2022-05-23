import htCarter from './src/index';

/* istanbul ignore next */
htCarter.install = function(Vue) {
  Vue.component(htCarter.name, htCarter);
};

export default htCarter;
