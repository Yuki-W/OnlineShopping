<!-- 分类 路由 -->
<template>
  <div class="classify">
    <!-- 搜索栏 -->
    <search></search>

    <!-- 左侧 滚动条 -->
    <div class="mui-scroll-wrapper mui-segmented-control-vertical ">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">
            新品
        </a>
        <a class="mui-control-item">
            众筹
        </a>
        <a class="mui-control-item">
            小米手机
        </a>
        <a class="mui-control-item">
            Redmi手机
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
        <a class="mui-control-item">
            热点
        </a>
        <a class="mui-control-item">
            北京
        </a>
        <a class="mui-control-item">
            社会
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
        <a class="mui-control-item">
            热点
        </a>
        <a class="mui-control-item">
            北京
        </a>
        <a class="mui-control-item">
            社会
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
        <a class="mui-control-item">
            热点
        </a>
        <a class="mui-control-item">
            北京
        </a>
        <a class="mui-control-item">
            社会
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
        <a class="mui-control-item">
            热点
        </a>
        
      </div>
    </div>
    <!-- 内容区域 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import search from "../subComponents/Search";
import mui from "../../../lib/mui/js/mui";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    search
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.classify {
  .sub-search {
    width: 320px;
  }
}

/* 左侧导航条 */
.mui-scroll-wrapper{
    top: 50px;
    width: 100px;
    text-align: center;
    border-right: 1px solid #999;

    .mui-control-item{
        display: block;
        margin: 20px 0;
        font-size: $fontSize+2;
        color:#606060;
    }
    .mui-active{
        color:brown
    }
}
* {
  touch-action: pan-y;
}
</style>