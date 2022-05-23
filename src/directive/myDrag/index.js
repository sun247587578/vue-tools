/**
* 实现div可以在屏幕上随意拖拽位置, 前提是div的定义是position fixed;
* auth sunj
*/

export default {
    bind(el,binding) {
        // let oDiv = el; // 当前元素
        // // let self = this // 上下文
        // // 禁止选择网页上的文字
        // document.onselectstart = function () {
        //   return false;
        // };
        // oDiv.onmousedown = function (e) {
        //   // 鼠标按下，计算当前元素距离可视区的距离
        //   let disX = e.clientX - oDiv.offsetLeft;
        //   let disY = e.clientY - oDiv.offsetTop;
        //   document.onmousemove = function (e) {
        //     // 通过事件委托，计算移动的距离
        //     let l = e.clientX - disX;
        //     let t = e.clientY - disY;
        //     // 移动当前元素
        //     oDiv.style.left = l + "px";
        //     oDiv.style.top = t + "px";
        //   };
        //   document.onmouseup = function (e) {
        //     document.onmousemove = null;
        //     document.onmouseup = null;
        //   };
        //   // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
        //   return false;
        // };
        const value = binding.value
        if (value == false) return
        // 获取拖拽内容头部
        const dialogHeaderEl = el.querySelector('.box-header');
        const dragDom = el;
        
        dialogHeaderEl.style.cursor = 'move';
        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
        dragDom.style.position = 'fixed';
        dragDom.style.marginTop = 0;
        // let width = dragDom.style.width;
        // if (width.includes('%')) {
        //   width = +document.body.clientWidth * (+width.replace(/\%/g, '') / 100);
        // } else {
        //   width = +width.replace(/\px/g, '');
        // }
        // dragDom.style.left = `${(document.body.clientWidth - width) / 2}px`;
        // 鼠标按下事件
        dialogHeaderEl.onmousedown = (e) => {
          // 鼠标按下，计算当前元素距离可视区的距离 (鼠标点击位置距离可视窗口的距离)
          const disX = e.clientX - dialogHeaderEl.offsetLeft;
          const disY = e.clientY - dialogHeaderEl.offsetTop;

          // 获取到的值带px 正则匹配替换
          let styL, styT;

          // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
          if (sty.left.includes('%')) {
            styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
            styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
          } else {
            styL = +sty.left.replace(/\px/g, '');
            styT = +sty.top.replace(/\px/g, '');
          };

          // 鼠标拖拽事件
          document.onmousemove = function (e) {
            // 通过事件委托，计算移动的距离 （开始拖拽至结束拖拽的距离）
            const l = e.clientX - disX;
            const t = e.clientY - disY;

            let finallyL = l + styL
            let finallyT = t + styT

            // 移动当前元素
            dragDom.style.left = `${finallyL}px`;
            dragDom.style.top = `${finallyT}px`;

          };

          document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
    },
  };