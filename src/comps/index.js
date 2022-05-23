var pjson = require("../../package.json");

import Drag from './drag/index.js';
import carter from './carter/index.js';
import dataView from './dataView/index.js';
import dataView2 from './dataView2/index.js';
import dataView3 from './dataView3/index.js';
import dataView4 from './dataView4/index.js';
import headline from './headline/index.js';
import headline2 from './headline2/index.js';
import headline3 from './headline3/index.js';
import headline4 from './headline4/index.js';
import headline5 from './headline5/index.js';
import headline6 from './headline6/index.js';
import marquee from './marquee/index.js';
import divider from './divider/index.js';
import dataList from './dataList/index.js';
import dataScroll from './dataScroll/index.js';
import scanner from './scanner/index.js';
import scrollBar from './scrollBar/index.js';
import scrollView from './scrollView/index.js';
import tabSelect from './tabSelect/index.js';
import tabGroup from './tabGroup/index.js';
import tabSelect2 from './tabSelect2/index.js';
import tabSelect3 from './tabSelect3/index.js';
import particles from './particles/index.js';
import button1 from './button1/index.js';
import spanTag from './spanTag/index.js';
const components = [
  Drag, carter, dataView, dataView2, headline, headline2, headline3,headline4, headline5,headline6,divider, 
  dataList,dataScroll, dataView3, dataView4 ,scanner,scrollView, scrollBar, tabSelect, tabGroup, tabSelect2, tabSelect3,
  particles,button1,marquee,spanTag
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  version: pjson.version,
  Drag,
  carter,
  dataView,
  dataView2,
  dataView3,
  dataView4,
  headline,
  headline2,
  headline3,
  headline4,
  headline5,
  headline6,
  divider,
  dataList,
  dataScroll,
  scanner,
  scrollBar,
  scrollView,
  tabSelect,
  tabGroup,
  tabSelect2,
  tabSelect3,
  particles,
  button1,
  marquee,
  spanTag,
  install
};
