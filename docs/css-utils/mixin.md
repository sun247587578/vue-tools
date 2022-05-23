# css混入方法

## 使用方式

在scss文件中引入
```scss
@import "~vue-hangtian-ui/src/assets/styles/mixin.scss"

在当前的scss文件中可使用混入方法


.calss-name{
  @include pcenter(参数)
}
```

## BEM 饿了么规范
```scss
@include b(button){
  // el-button
  background-color: $ht-base-border1;
  position: relative;
  @include m(horizontal) {
    //el-button--horizontal
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
  }
  @include e(text) {
    //el-button__text
    position: absolute;
    padding: 0 20px;
    font-weight: 500;
    font-size: 14px;
    @include when(left) {
      //el-button__text.isleft
      left: 20px;
      transform: translateY(-50%);
    }
  }
}

```

## 清除浮动

提供了class 方法和 混入方法

```html
<div class="clearfix"></div>
```
或者
```css
.class-name{
  @include clearfix()
}
```
## 定位上下左右居中

```scss
@mixin pcenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```


## 定位左右居中
```scss
@mixin plcenter {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

```

## 定位上下居中
```scss
@mixin ptcenter {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

## 字体大小，颜色
```scss
@mixin fsc($size, $color) {
  font-size: px2rem($size);
  color: $color;
}
```


## flex 布局和子元素对齐方式
```scss
@mixin flex($type: space-between) {
  display: flex;
  justify-content: $type;
}
```



## 文本格式化，超出范围，显示省略号
```scss
@mixin textOverflow($width:100%, $display:block) {
  width: $width;
  display: $display;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
```




## 渐变(从上到下）
```scss
@mixin linear-gradient($direction:bottom, $color1:transparent, $color2:#306eff, $color3:transparent) {
  //background: -webkit-linear-gradient($direction,$colorTop, $colorCenter, $colorBottom); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient($direction, $color1, $color2, $color3);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient($direction, $color1, $color2, $color3);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to $direction, $color1, $color2, $color3);
  /* 标准的语法 */
}

```

## 画三角形
```scss
@mixin triangle($width:10px, $direction:top, $color:$bgBlueLight) {
  border: $width solid transparent;

  @if ($direction==top) {
    // 上三角
    border-bottom-color: $color;
  }

  @if ($direction==bottom) {
    // 下三角
    border-top-color: $color;
  }

  @if ($direction==left) {
    // 左三角
    border-right-color: $color;
  }

  @if ($direction==right) {
    // 右三角
    border-left-color: $color;
  }
}
```
## 文本阴影
```scss
@mixin text-show($h-shadow:0px, $v-shadow:0px, $blur:10px, $color:rgba(0, 180, 255, 0.7)) {
  text-shadow: $h-shadow $v-shadow $blur $color;
}
```

## 链接样式 
```scss
@mixin hoverStyle($style:(color:#d9fdff), $hoverStyle:(color:#306eff)) {
  text-decoration: none;

  @each $key,
  $value in $style {
    #{$key}: #{$value};
  }

  @if ($hoverStyle !=null & & $hoverStyle !="") {
    &:hover {

      @each $key,
      $value in $hoverStyle {
        #{$key}: #{$value};
      }
    }
  }
}
```
## 定义滚动条样式 圆角和阴影不需要则传入null
```scss
@mixin scrollBar($width:10px, $height:10px, $outColor:$bgColor, $innerColor:$bgGrey, $radius:5px, $shadow:null) {

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: $width;
    height: $height;
    background-color: $outColor;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    @if ($shadow !=null) {
      -webkit-box-shadow: $shadow;
    }

    @if ($radius !=null) {
      border-radius: $radius;
    }

    background-color: $outColor;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    @if ($shadow !=null) {
      -webkit-box-shadow: $shadow;
    }

    @if ($radius !=null) {
      border-radius: $radius;
    }

    background-color: $innerColor;
    border: 1px solid $innerColor;
  }
}
```

## css3动画 默认3s宽度到200px
```scss
@mixin animation($from:(width:0px), $to:(width:200px), $name:mymove, $animate:mymove 2s 1 linear infinite) {
  -webkit-animation: $animate;
  -o-animation: $animate;
  animation: $animate;

  @keyframes #{$name} {
    from {

      @each $key,
      $value in $from {
        #{$key}: #{$value};
      }
    }

    to {

      @each $key,
      $value in $to {
        #{$key}: #{$value};
      }
    }
  }

  @-webkit-keyframes #{$name} {
    from {

      @each $key,
      $value in $from {
        $key: $value;
      }
    }

    to {

      @each $key,
      $value in $to {
        $key: $value;
      }
    }
  }
}
```
## 圆形盒子
```scss
@mixin circle($size: 11px, $bg: #fff) {
  border-radius: 50%;
  width: $size;
  height: $size;
  line-height: $size;
  text-align: center;
  background: $bg;
}
```

## placeholder
```scss
@mixin placeholder($color: #bbb) {

  // Firefox
  &::-moz-placeholder {
    color: $color;
    opacity: 1;
  }

  // Internet Explorer 10+
  &:-ms-input-placeholder {
    color: $color;
  }

  // Safari and Chrome
  &::-webkit-input-placeholder {
    color: $color;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
}
```



## scss 设置距离底部对齐
原理是table属性 vertical-align
``` scss
@mixin utils-vertical-center {
  $selector: &;

  @at-root {
    #{$selector}::after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle
    }
  }
}
```
