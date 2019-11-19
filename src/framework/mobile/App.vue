<!-- 移动端 -->
<template>
  <div class="m_app">
    
    <!-- 内容区域 路由 -->
    <router-view></router-view>

    <!-- 底部 footerBar 切换区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../../assets/images/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img slot="icon" src="../../assets/images/home.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="star">
        <img slot="icon" src="../../assets/images/home.png">
        星球
      </mt-tab-item>
      <mt-tab-item id="shopCar">
        <img slot="icon" src="../../assets/images/home.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="aboutMe">
        <img slot="icon" src="../../assets/images/home.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
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
        selected:this.selected  //获取被选中的选项卡ID值
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
      selected:function(val,oldVal) {   //tabbar跳转到对应的路由组件
        //   console.log(val+"---"+ oldVal);
        switch (val) {  
            case "home":
                this.$router.push('/home');
                break;
            case "classify":
                this.$router.push('/classify');
                break;
            case "star":
                this.$router.push('/star');
                break;
            case "shopCar":
                this.$router.push('/shopCar');
                break;
            case "aboutMe":
                this.$router.push('/aboutMe');
                break;
        }
      }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  
};
</script>
<style lang="scss">
@charset "utf-8";
.mint-tabbar{
  .mint-tab-item-label{
    color: #797979;
  }
}
</style>