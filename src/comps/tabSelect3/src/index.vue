<template>
  <ht-scroll-bar style="height:100%">
    <div class="ht-select-nv-main" ref="nvMain">
        <canvas id="canvas-2761" style="position: absolute; z-index: -1; left: 0px;"></canvas>
        <span class="ht-select-nv-span">
          <a class="ht-select-nv-link" style="width: 0px;min-width:0px"></a>
        </span>
        <span class="ht-select-nv-span" v-for="(item,index) in menuList" @click="toggle(index)" :key="index">
          <a class="ht-select-nv-link">{{item}}</a>
        </span>
    </div>
  </ht-scroll-bar>
</template>


<script>
// import variables from "../../../assets/styles/variables.scss";
export default {
  name: "htTabSelect3",
  props: {
    menuList:{
      type:Array,
      default:[],
    },
    actIndex:{
      type:[Number],
      default:0,
    }
  },
  data() {
    return {
      // color:variables.baseColor1,
      canvasObj:null
    };
  },
  computed: {},
  methods: {
    canvasnav() {
      var that = this;
      var c = Math.min,
        h = Math.sign,
        m = Math.max,
        n = Math.abs,
        j = 0.85,
        k = 10,
        l = 4;
      var opt = {};
      opt.currentIndex = 1;
      opt.canvas = document.getElementById("canvas-2761");

      var calcAVGSpeed = function (a) {
        var b = (l * j * a + k * (1 - j) * a) / (k * l * 20);
        return (b = m(n(b), 2.5) * h(b)), b;
      };
      var getCurSpeed = function (a, b) {
        var c = n(a) > n(j * b) ? l * opt.avgSpeed : k * opt.avgSpeed;
        return c;
      };

      var _calCurve = function (a, b, c, d, e, f) {
        //console.log(a + f,b,c-f,d,c,d);
        e.bezierCurveTo(a + f, b, c - f, d, c, d);
      };

      var _initCanvas = function (canvas, width, height) {
        var devicePixelRatio = window.devicePixelRatio,
          canvasObj = canvas.getContext("2d");
        (canvas.width = width * devicePixelRatio),
          (canvas.height = height * devicePixelRatio),
          (canvas.style.width = width + "px"),
          (canvas.style.height = height + "px"),
          canvasObj.scale(devicePixelRatio, devicePixelRatio);
      };

      var resize = function () {
        //resize发生
        opt.timer && cancelAnimationFrame(opt.timer);
        _calcTabs();
        _initCanvas(opt.canvas, opt.width, opt.height), draw(0);
      };

      var _calcTabs = function () {
        var a = document.querySelectorAll(".ht-select-nv-main .ht-select-nv-span"),
          b = [],
          c = 0;

        Array.prototype.forEach.call(a, function (a) {
          b.push(c), (c += a.offsetWidth);
        }),
          (b[0] = -20),
          b.push(c),
          (opt.tabWidthList = b),
          (opt.tabHeight = a[0].offsetHeight + 0),
          (opt.height = opt.tabHeight + 20),
          (opt.width = that.$refs.nvMain.getBoundingClientRect().width);
      };

      var _toggle = function (navindex) {
        "undefined" !== typeof navindex &&
          navindex !== opt.currentIndex &&
          opt.tabWidthList &&
          opt.tabWidthList.length &&
          (!opt.animating || navindex !== opt.nextIndex) &&
          ((opt.animating = true),
          (opt.distance =
            opt.tabWidthList[navindex] - opt.tabWidthList[opt.currentIndex]),
          (opt.avgSpeed = calcAVGSpeed(opt.distance)),
          (opt.curDisX = 0),
          (opt.nextIndex = navindex));
        return false;
      };

      var _createPattern = function (a) {
        var b = 140,
          c = 63,
          d = 1,
          e = document.createElement("canvas");
        (e.width = b),
          (e.height = c),
          (e.style.width = b / d + "px"),
          (e.style.height = c / d + "px");
        var f = e.getContext("2d");
        //缩放 宽高 100%
        f.scale(d, d);
        f.lineWidth = 0.4;
        // 画横线
        for (var g = 3, h = 0.9, j = 1; 30 > j; j++) {
          //设置或返回用于笔触的颜色、渐变或模式
          f.strokeStyle = "RGBA(2, 190, 255, " + h + ")";
          //开始一条路径
          f.beginPath();
          //把路径移动到画布中的指定点，不创建线条
          f.moveTo(0, j * g);
          //添加一个新点，然后在画布中创建从该点到最后指定点的线条
          f.lineTo(b, j * g);
          //绘制已定义的路径
          f.stroke();
          //创建从当前点回到起始点的路径
          f.closePath();
          10 < j && (h -= 0.1);
        }
        var i = a.getContext("2d").createPattern(e, "repeat-x");
        (opt.pattern = i), (e = null);
      };

      var _drawHightlight = function (a) {
        //a = 0
        var b = opt.canvas.getContext("2d"),
          d = 0.3;
        //clearRect 在给定的矩形内清除指定的像素,这里清完了
        b.clearRect(0, 0, 2 * opt.width, 2 * opt.height);
        b.shadowColor = "rgba(0, 193, 220, 1)";
        b.shadowBlur = 5;
        b.strokeStyle = "#004CB3";
        b.lineWidth = 1.8;
        b.fillStyle = "none";
        _draw(b, false);
        //这里绘制了外围边框线条
        //return false;
        var e = b.createLinearGradient(0, 0, opt.width, opt.height),
          f = a - d;
        e.addColorStop(c(1, m(0, 0 + f)), "rgba(0,0,0,0)");
        e.addColorStop(c(1, m(0, 0 + f + 0.1)), "#8ED6FF");
        e.addColorStop(c(1, 0 + f + d), "#8ED6FF");
        e.addColorStop(c(1, 0 + f + d + 0.1), "rgba(0,0,0,0)");
        e.addColorStop(1, "rgba(0,0,0,0)");
        b.lineWidth = 3.6;
        b.strokeStyle = e;
        b.fillStyle = opt.pattern;
        _draw(b, true);
      };

      var draw = function (a) {
        //console.log(a);
        _drawHightlight(a);
        //return false;

        opt.timer = requestAnimationFrame(function () {
          //console.log(a);
          draw((a + 0.005) % 1.6);
        });
      };

      var _draw = function (canvasObj, trueorfalse) {
        var navindex = opt.currentIndex,
          tableHeight = opt.tabHeight,
          f = 0,
          g = 40,// 上角度
          i = 20, // 左右角度
          j = 0.5, // 距离上部的距离
          k = 2.5, // 控制了高度
          l = 0;
        if (
          (canvasObj.beginPath(),
          canvasObj.moveTo(-50, opt.height + 10),
          canvasObj.lineTo(-50, tableHeight + j),
          opt.animating)
        ) {
          var m = getCurSpeed(opt.curDisX, opt.distance);
          l = c(n(opt.distance), n(opt.curDisX + m)) * h(m);
        }
        if (
          (canvasObj.lineTo(
            f + opt.tabWidthList[navindex] + l - g / 2,
            tableHeight + j
          ),
          _calCurve(
            f + opt.tabWidthList[navindex] + l - g / 2,
            tableHeight + j,
            f + opt.tabWidthList[navindex] + l + g / 2,
            k + j,
            canvasObj,
            i
          ),
          opt.animating)
        ) {
          var o =
            opt.tabWidthList[opt.nextIndex + 1] -
            opt.tabWidthList[opt.nextIndex];
          canvasObj.lineTo(
            f + opt.tabWidthList[navindex] + o + l - g / 2,
            k + j
          ),
            _calCurve(
              f + opt.tabWidthList[navindex] + o + l - g / 2,
              k + j,
              f + opt.tabWidthList[navindex] + o + l + g / 2,
              tableHeight + j,
              canvasObj,
              i
            );
        } else {
          //lineTO添加一个新点 宽度长度
          canvasObj.lineTo(
            f + opt.tabWidthList[navindex + 1] + l - g / 2,
            k + j
          );
          _calCurve(
            f + opt.tabWidthList[navindex + 1] + l - g / 2,
            k + j,
            f + opt.tabWidthList[navindex + 1] + l + g / 2,
            tableHeight + j,
            canvasObj,
            i
          );
        }
        canvasObj.lineTo(opt.width + 10, tableHeight + j);
        canvasObj.lineTo(opt.width + 10, opt.height + 10);
        canvasObj.closePath();
        canvasObj.stroke();
        trueorfalse && canvasObj.fill();
        opt.animating &&
          trueorfalse &&
          ((opt.curDisX = l),
          n(l) >= n(opt.distance) &&
            ((opt.animating = false), (opt.currentIndex = opt.nextIndex)));
      };

      // _toggle(3);
      _calcTabs();
      _initCanvas(opt.canvas, opt.width, opt.height);
      _createPattern(opt.canvas);
      draw(0);

      window.onresize = function () {
        resize();
      };

      return {
        _toggle: _toggle,
      };
    },
    toggle(index){
      this.canvasObj._toggle(index+1);
      this.$emit("change",{index,name:this.menuList[index]})
    },
    createDom(){
      
      return ""
    }
    
  },
  mounted() {
    
    let act = (this.actIndex>=this.menuList.length)?(this.menuList.length-1):(this.actIndex);
    this.canvasObj = this.canvasnav(act);
    this.canvasObj._toggle(act+1);
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/variables.scss";
span {
  color: inherit;
}
a {
  text-decoration: none;
  cursor: pointer;
}

.ht-select-nv-main .ht-select-nv-span .ht-select-nv-active,
.datav-ht-select-nv .ht-select-nv-main .ht-select-nv-span .ht-select-nv-link:hover {
  color: #00baff !important;
}

.ht-select-nv-main .ht-select-nv-span .ht-select-nv-link {
  text-decoration: none !important;
  display: block;
  color: #fff;
  width: auto;
  min-width: 140px;
  line-height: 40px;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  padding: 0 40px;
}

.datav-icon {
  display: inline-block;
  vertical-align: middle;
}

.datav-font {
  font-family: "datav-font" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ht-select-nv-main .ht-select-nv-icon {
  padding-right: 5px;
  
  font-size: 20px;
}

.ht-select-nv-main {
  z-index: 1;
  display: flex;
  // top: 200px;
  // position: fixed;
  position: relative;
  // height: 40px;
  width:100%;
  // padding-left:30px;
  // min-width: 1024px;
}
</style>
