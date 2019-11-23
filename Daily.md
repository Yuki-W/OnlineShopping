# 2019年11月18日
1、解决底部 tabbar 路由跳转失败问题
    原因：watcher里面监听 slected 状态改变 不能使用箭头函数   
    理由：箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
        watcher函数详解：https://cn.vuejs.org/v2/api/#watch
2、待解决：Home.vue加上 scoped 之后自定义的search样式失效

# 2019年11月19日
## 轮播图组件 swipe
## 使用MUI代码片段
>  注意： MUI 不同于 Mint-UI，MUI只是开发出来的一套好用的代码片段，里面提供了配套的样式、配套的HTML代码段，类似于 Bootstrap； 而 Mint-UI，是真正的组件库，是使用 Vue 技术封装出来的 成套的组件，可以无缝的和 VUE项目进行集成开发；
> 因此，从体验上来说， Mint-UI体验更好，因为这是别人帮我们开发好的现成的Vue组件；
> 从体验上来说， MUI和Bootstrap类似；
> 理论上，任何项目都可以使用 MUI 或 Bootstrap，但是，MInt-UI只适用于Vue项目；
    
    使用方法：导入 MUI 的样式表：
```
import '../lib/mui/css/mui.min.css'
```
## 制作顶部滚动条的坑：
1、需要借助于MUI中的tab-top-webview-main.html
2、需要把 slider 区域的 mui-fullscreen 类去掉，否则会全屏显示
3、滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化
    + 导入 mui.js
    + 调用官方提供的方式去初始化
    ```
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    ```
    + 解决export 'default' (imported as '相关函数') was not found问题的方法：
      产生的原因是export 和module 同时出现
      3.1、安装包 ``` npm install --save-dev babel-plugin-syntax-dynamic-import```
      3.2、修改.babelrc文件。主要修改plugins的配置
    + 解决点击滑动条报错问题
      ```
      * {touch-action: pan-y;}
      ```
4、在mounted里面初始化滑动控件

## 使用Mock.js生成随机数据，通过异步请求获取
1、安装mock.js  ```npm install mockjs --save-dev```
2、安装 HTTP库 axios  ```cnpm install axios --save ```
3、创建Mock JS文件夹，里面放置Mock.js数据文件

# 2019年11月20日
## 抽离 tabbar组件，使 搜索组件复用
1、使用import引入封装的组件
2、在components里面注册该组件
3、页面中通过注册的组件名来使用该组件