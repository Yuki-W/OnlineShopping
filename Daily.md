# 2019年11月18日
1、解决底部 tabbar 路由跳转失败问题
    原因：watcher里面监听 slected 状态改变 不能使用箭头函数   
    理由：箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
        watcher函数详解：https://cn.vuejs.org/v2/api/#watch