<!-- 首页 路由 -->
<template>
<div class=''>
    <!-- 顶部 Header 区域 -->
    <div class="m_topBar">
      <div class="m_logo">小米</div>
      <mt-search></mt-search>
      <div class="m_login">登录</div>
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
%common-block {
  /* 公共占位块样式，以后的类可以继承它的样式 */
  width: 50px;
  height: 35px;
  background-color: #ff3;
  text-align: center;
  font-size: 20px;
  line-height: 35px;
}
.m_topBar {
  /* 顶部导航栏样式 */
  display: flex;
  justify-content: space-around;
  margin-top: 5px;

  .m_logo {
    @extend %common-block;
  }
  .mint-search {
    height: 35px;
    width: 200px;
    border-radius: 20px;

    .mint-searchbar {
      padding: 0;
      height: 35px;
      background-color: white;
      border: 1px solid #9e9e9e36;
      border-radius: 20px;
      padding-left: 10px;
    }
    input{
        padding-left: 10px;
    }
  }
  .m_login {
    @extend %common-block;
  }
}
</style>