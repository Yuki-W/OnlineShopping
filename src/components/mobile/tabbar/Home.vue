<!-- 首页 路由 -->
<template>
  <div class="home">
    <!-- 顶部 Header 区域 -->
    <div class="m_topBar">
      <div class="m_logo">小米</div>
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder="小米 CC9 Pro" />
      </div>
      <div class="m_login">登录</div>
    </div>

    <!-- 轮播图 区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <!-- 菜单栏 区域 -->
    <div class="navbar">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-gear"></span>
            <div class="mui-media-body">Setting</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-info"></span>
            <div class="mui-media-body">about</div>
          </a>
        </li>
      </ul>
      <ul class="navbar-ul">
        <li>
          <div>
            <h2>4K极清</h2>
            <p>2千人想要</p>
          </div>
          <img src="../../../assets/images/home.png" />
        </li>
        <li>
          <div>
            <h2>4K极清</h2>
            <p>2千人想要</p>
          </div>
          <img src="../../../assets/images/home.png" />
        </li>
        <li>
          <div>
            <h2>4K极清</h2>
            <p>2千人想要</p>
          </div>
          <img src="../../../assets/images/home.png" />
        </li>
      </ul>
    </div>

    <!-- 滑动标题列表 区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >
            <h2>推荐</h2>
            <p>为你推荐</p>
          </a>
        </div>
      </div>
    </div>

    <!-- 滑动标题列表对应项 路由区域 -->
  </div>
</template>

<script>
// 导入 MUI 的JS文件
import mui from "../../../lib/mui/js/mui";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
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
    // 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 
    });
  }
};
</script>
<style lang='scss' scoped>
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
  display: $myDisplay;
  justify-content: space-around;
  margin-top: 5px;

  .m_logo {
    @extend %common-block;
  }
  .mui-input-clear {
    margin-bottom: 0;
    border-radius: 28px;
    text-align: left;
    background: {
      color: #fff;
      image: url(../../../assets/images/search.png);
      repeat: no-repeat;
      position: 10px 9px;
    }
  }
  .m_login {
    @extend %common-block;
  }
}

/* 轮播图 */
.mint-swipe {
  height: 120px;
  margin: 10px 20px;
}

/* 菜单栏 区域 */
.navbar {
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid #9e9e9e73;
  border-radius: $borderRadius;
  background-color: #fff;

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
    li {
      border: 0;
    }
  }
}

.navbar-ul {
  display: $myDisplay;
  justify-content: space-around;
  margin: 20px 0 10px;
  li {
    display: $myDisplay;
    align-items: $myAlignCenter;
    justify-content: $mySpaceBetween;

    h2 {
      font-size: $titleSize;
      color: black;
    }
    p {
      font-size: $fontSize;
      color: #7b7373;
      margin-bottom: 0;
    }
    img {
      height: 50px;
    }
  }
}

/* 滑动标题列表 区域 */
#slider {
  margin: {
    top: 20px;
    bottom: 10px;
  }
  .mui-segmented-control .mui-control-item {
    line-height: 100%;
  }
  h2 {
    font-size: 18px;
    color: black;
    margin-bottom: 18px;
  }
  p {
    margin-top: -10px;
    font-size: $fontSize;
    margin-bottom: 0;
    color: #333;
    padding: 5px;
    border-radius: 10px;
  }
  
}
.mui-active{
  h2{
    color: #ffae00ba!important;
  }
    p{
      background-color: #ffae00ba;
      color:white!important;
    }
  }
#sliderSegmentedControl {
  height: 55px;
  .mui-scroll {
    height: 55px;
    a {
      height: 55px;
    }
  }
}
* {
  touch-action: pan-y;
}
</style>