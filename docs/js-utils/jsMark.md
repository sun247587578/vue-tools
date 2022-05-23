# js/vue相关方法笔记
## vueRouter 原地跳转报错

更改vuerouter,方法
```js
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location , onResolve, onReject) {
  if(onReject || onResolve){
    return originalPush.call(this,location,onResolve,onReject)
  }else{

    return originalPush.call(this,location).catch(err=>err)
  }
}
```
# 需要复制的js代码
## base64 的头
```
data:image/gif;base64,
```

## 后端配置dist静态文件
```java
//结合前端静态文件后添加
filterChainDefinitionMap.put("/dist/**", "anon");
```

# 比较实用的方法

## js对象转formData
```js
export function jsToFormData(config) { //对象转formdata格式
	let formData = new FormData();
	let obj = config.data;
	let arrayKey = config.arrayKey;
	for (var i in obj) {
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
	return formData;
}
}
```


## 将汉字生成图片, 大多用于姓氏
```js
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
 
```
```js
this.listData.forEach(r=>{
  r.imgSrc = genTextImg([80,80],r.name)
})
```
## 树形数据
``` js
/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
	let config = {
		id: id || 'id',
		parentId: parentId || 'parentId',
		childrenList: children || 'children'
	};

	var childrenListMap = {};
	var nodeIds = {};
	var tree = [];

	for (let d of data) {
		let parentId = d[config.parentId];
		if (childrenListMap[parentId] == null) {
			childrenListMap[parentId] = [];
		}
		nodeIds[d[config.id]] = d;
		childrenListMap[parentId].push(d);
	}

	for (let d of data) {
		let parentId = d[config.parentId];
		if (nodeIds[parentId] == null) {
			tree.push(d);
		}
	}

	for (let t of tree) {
		adaptToChildrenList(t);
	}

	function adaptToChildrenList(o) {
		if (childrenListMap[o[config.id]] !== null) {
			o[config.childrenList] = childrenListMap[o[config.id]];
		}
		if (o[config.childrenList]) {
			for (let c of o[config.childrenList]) {
				adaptToChildrenList(c);
			}
		}
	}
	return tree;
}
```

## 下载图片

```js
function loadPicture(){
  var imgSrc = Img.src;
      var filename = "photo.jpg";
      var a = document.createElement("a");
      a.style = "display:none";
      a.href = imgSrc;
      a.download = filename;

      requestAnimationFrame(function () {
        a.click();
      });
}

```

## 生成uuid的两种方法
``` js

export function guid(){
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){
    var r = Math.random()*16|0,v=c=="x"?r:(r&0x3|0x8);
    return toString(16)
  })
}

export function uuid(len, radix) {
  var  chars =  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' .split( '' );
  var  uuid = [], i;
  radix = radix || chars.length;

  if  (len) {
    // Compact form
    for  (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  }  else  {
    // rfc4122, version 4 form
    var  r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] =  '-' ;
    uuid[14] =  '4' ;

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for  (i = 0; i < 36; i++) {
      if  (!uuid[i]) {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return  uuid.join( '' );
}
```

## vue warch router
监听路由的变化

``` js
watch:{
  $route: {
    handler: function (route) {
      this.docId = this.$route.query.id;
    },
    immediate: true,
  },
}

```

## getImgToBase64

```js
/**
 * 将字图片转化成base64字符串
 * @param {*} url 图片地址 
 * @param {*} callback 回调函数,回调参数是转换后的base64字符串
 */
export function getImgToBase64(url,callback){
  var canvas = document.createElement("canvas"),ctx = canvas.getContext("2d"),img = new Image;
  img.crossOrigin = "Anonymous";
  img.onload = function (){
    canvas.height=img.height;
    canvas.width = img.width;
    ctx.drawImage(img,0,0);
    var dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
    canvas = null;
  };
  img.src = url;
}
```
## 转化对象为URL参数字符串
```js
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
```
## 将URL字符串中的参数转化成Object
```js
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

```