# 对日期进行格式化

## parseTime
```js
parseTime("2019-06-03","{y}-{m}-{d} {h}:{i}:{s}") 
==> 2019-06-03 00:00:00
parseTime("2019-06-03 00:00:00","{y}-{m}-{d}") 
==> 2019-06-03
```
> 示例
```html
<div>{{item.controlBeginTime  | parseTime("{y}-{m}-{d}")}}</div>
```


