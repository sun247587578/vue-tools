import dataView from './src/index';

/* istanbul ignore next */
dataView.install = function(Vue) {
  Vue.component(dataView.name, dataView);
};

export default dataView;
