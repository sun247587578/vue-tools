# scss常用方法

## 颜色计算方法

- ### lighten
 颜色提亮 适用于鼠标放置后改变颜色函数 
- ### darken
 颜色变暗 

```scss
backround:lighten(#000,10%);
backround:lighten($base-color,10%);

backround:darken(#000,10%);
backround:darken($base-color,10%);
```

- ### saturate 
 提高饱和度
- ### desaturate
 降低饱和度
```
用法同上
```
- ### grayscale 
 将一个颜色变成灰色 , 会根据参数颜色生成不同亮度的灰色
```scss
grayscale(#36) == #999
```

- ### mix 
 指定两个颜色 以及占比生成另外一个颜色
```scss
mix($color1,$color2,$weight)
```
> $weight 代表第一个颜色$color1 所占的比重


## scss 循环
生成一堆由深到浅的循环函数, 一个简答的循环方法
```scss
@mixin swatchesDarken($color){
  @for $i from 1 through 10{
    $x:$i+11;
    li:nth-child(#{$x}){
      $n:$i*5;
      $bgc:darken($color,$n); // darken使用方法详见scss 颜色函数
      background-color:$bgc;
    }
    
    
  }
}

```

