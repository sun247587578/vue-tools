
/**
 * {
 * 	data:{},
 * 	arrayKey:["shuxing"],
 * }
 * 将js对象转化成FormData
 * @param {Object} config 
 * @returns 
 */
export function jsToFormData(config) { //对象转formdata格式
  let formData = new FormData();
  let obj = config.data;
  let arrayKey = config.arrayKey;
  for (var i in obj) {
    console.log(obj[i])
    if(obj[i] === null ||obj[i] === undefined ||obj[i]==="null"||obj[i]==="undefined"){
      
    }else{
      if (Array.isArray(obj[i])) {
        obj[i].map(item => {
          if (!arrayKey) {
            formData.append(i, item)
          } else {
            formData.append(i + '[]', item)
          }
        })
      } else if (obj[i] instanceof FileList) {
        //filelist 文件类型的处理
        for (var fileItem = 0; fileItem < obj[i].length; fileItem++) {
          if (!arrayKey) {
            formData.append(i, obj[i].item(fileItem))
          } else {
            formData.append(i + '[]', obj[i].item(fileItem))
          }
        }
      } else {
        formData.append(i, obj[i])
  
      }
    }
    
  }
  return formData;
}
/**
 * 判断对象是否是一个function
 * @param {*} obj 
 * @returns 
 */
export function isFunction(obj) {

  return typeof obj === "function" && typeof obj.nodeType !== "number" &&
    typeof obj.item !== "function";
};
/**
 * 简化版的对象深度合并
 * @param {Object} e 
 * @param {Object} a 
 * @returns 
 */
export function deepExtend(e, a) {
  for (var t in a)
    a[t] && a[t].constructor && a[t].constructor === Object
      ? ((e[t] = e[t] || {}), deepExtend(e[t], a[t]))
      : (e[t] = a[t]);
  return e;
}
/**
 * 判断一个对象是不是空对象,也就是{} 没有属性
 * @param {*} obj 
 * @returns 
 */
export function isEmptyObject(obj) {
  var name;

  for (name in obj) {
    return false;
  }
  return true;
}



// requestAnimationFrame 适配函数
const raFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
  return window.setTimeout(callback, 1000 / 60);
};

/**
 * 动画延时函数
 * @function
 * @param {function} callback 动画回调函数
 * @return {number} id 标识
 *
 * @example
 *
 * import {requestAnimationFrame} from '$ui/utils/util'
 * requestAnimationFrame(() => {
 *   // do sth ....
 *
 * })
 */
export const requestAnimationFrame = raFrame

/**
 * 清除动画延时
 * @function
 * @param {number} id 标识
 *
 * @example
 *
 * import {requestAnimationFrame, cancelAnimationFrame} from '$ui/utils/util'
 * const id = requestAnimationFrame(()= > {
 *   // do sth
 * })
 * cancelAnimationFrame(id)
 */
export const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitRequestAnimationFrame || function (id) {
  window.clearTimeout(id);
};




/**
 * 防抖函数
 * @param {function} fn 事件处理函数
 * @param {number} [delay=20] 延迟时间
 * @param {boolean} [isImmediate=false] 是否立刻执行
 * @param {object} [context=this] 上下文对象
 * @returns {Function} 事件处理函数
 */
export function debounce(fn, delay = 20, isImmediate = false, context = this) {
  // 使用闭包，保存执行状态，控制函数调用顺序
  let timer;

  return function () {
    const _args = [].slice.call(arguments)

    clearTimeout(timer);

    const _fn = function () {
      timer = null;
      if (!isImmediate) fn.apply(context, _args);
    };

    // 是否滚动时立刻执行
    const callNow = !timer && isImmediate;

    timer = setTimeout(_fn, delay);

    if (callNow) fn.apply(context, _args);
  }
}

/**
 * 节流函数
 * @param {function} fn 事件处理函数
 * @param {object} [context=this] 上下文对象
 * @param {boolean} [isImmediate=false] 是否立刻执行
 * @returns {Function} 事件处理函数
 */
export function throttle(fn, context = this, isImmediate = false) {
  let isLocked;
  return function () {
    const _args = arguments

    if (isLocked) return

    isLocked = true
    raFrame(function () {
      isLocked = false;
      fn.apply(context, _args)
    })

    isImmediate && fn.apply(context, _args)
  }
}

/**
 * 将字图片转化成base64字符串
 * @param {*} url 图片地址 
 * @param {*} callback 回调函数,回调参数是转换后的base64字符串
 */
export function getImgToBase64(url, callback) {
  var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), img = new Image;
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
    canvas = null;
  };
  img.src = url;
}


/**
 * 抛弃数组中无用的数据
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * 将Object 转化为&连接的URL参数字符串
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}



/**
 * 将URL字符串中的参数转化成Object
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}


/**
 * @param longT 时间跨度, 
 * @param nowTime 时间
 * @param pix 单位 ymd 默认天
 * @param pon 前后 //默认前
 * 获取指定时间前 XX 的时间段
 */
export function timeLapses(longT, nowTime, pix, pon) {

  let nt = nowTime ? new Date(nowTime) : new Date();
  // let tm = 
  let ed = nt.getTime() - 3600 * 1000 * 24 * (longT || 30);
  return [parseTime(ed), parseTime(nt)]
}

/**
 * 
 * @param {最小值} min 
 * @param {最大值} max 
 * @returns  范围内的随机数
 */
export function mathRandom(min, max) {
  var range = max - min;
  var rand = Math.random();
  var num = min + Math.round(rand * range)
  return num
}


/**
 * todo
 * @param {*} list<> 需要去重的数组 
 * @param {*} key 去重判断的键
 */
export function listRemoveRepeat(list,key) {

  list.forEach(r=>{

  })

  
}

function unique(arr1) {
  const res = new Map();
  return arr1.filter((a) => !res.has(a.from) && res.set(a.from, 1))
}

// 将汉字转化成图片 姓氏
export function genTextImg(size, s) {
  let x = s.substr(0,1)
 let tranColor = (name) => {
  var str ='';
  for(var i=0; i<name.length; i++) {
   str += parseInt(name[i].charCodeAt(0), 10).toString(16);
  }
  return '#' + str.slice(1, 4);
 }
 const bgColor = tranColor(x)
  let colors = [
  "rgb(239,150,26)", 'rgb(255,58,201)', "rgb(111,75,255)", "rgb(36,174,34)", "rgb(80,80,80)"
  ];
  let cvs = document.createElement("canvas");
  cvs.setAttribute('width', size[0]);
  cvs.setAttribute('height', size[1]);
  let ctx = cvs.getContext("2d");
  ctx.fillStyle =bgColor;
  ctx.fillRect(0, 0, size[0], size[1]);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.font = size[0]*0.6+"px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(x,size[0]/2,size[1]/2);
  return cvs.toDataURL('image/jpeg', 1);
 }


export function startPage({ pageNum, pageSize }, list) {
  let lists =  list.concat([])
  return {
    data: lists.splice((pageNum - 1) * pageSize, pageSize),
    total: list.length,
  };
}