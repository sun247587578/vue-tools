import mod from './src/index';

/* istanbul ignore next */
mod.install = function(Vue) {
  Vue.component(mod.name, mod);
};

export default mod;
