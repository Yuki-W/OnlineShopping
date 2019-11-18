<!-- PC端 -->
<template>
<div class='app'>
    <!-- 顶部 Header区域 -->
    <el-row :gutter="10" class="stie-topbar">
      <el-col :lg="13">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#000"
          text-color="#b0b0b0"
        >
          <el-menu-item>小米商城</el-menu-item>
          <el-menu-item>MIUI</el-menu-item>
          <el-menu-item>loT</el-menu-item>
          <el-menu-item>云服务</el-menu-item>
          <el-menu-item>金融</el-menu-item>
          <el-menu-item>有品</el-menu-item>
          <el-menu-item>小爱开放平台</el-menu-item>
          <el-menu-item>企业团购</el-menu-item>
          <el-menu-item>资质证照</el-menu-item>
          <el-menu-item>协议规则</el-menu-item>
          <el-menu-item>下载app</el-menu-item>
          <el-menu-item>Select Location</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :lg="5">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#000"
          text-color="#b0b0b0"
          active-text-color="#fff"
        >
          <el-menu-item>登录</el-menu-item>
          <el-menu-item>注册</el-menu-item>
          <el-menu-item>消息通知</el-menu-item>
          <el-menu-item>
            <i class="el-icon-shopping-cart-2"></i>购物车(0)
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="site-header">
      <el-col :lg="2">
        <div class="logo"></div>
      </el-col>
      <el-col :lg="12">
        <el-menu class="el-menu-demo" mode="horizontal" text-color="#333">
          <el-menu-item>小米手机</el-menu-item>
          <el-menu-item>Reami红米</el-menu-item>
          <el-menu-item>电视</el-menu-item>
          <el-menu-item>笔记本</el-menu-item>
          <el-menu-item>家电</el-menu-item>
          <el-menu-item>路由器</el-menu-item>
          <el-menu-item>智能硬件</el-menu-item>
          <el-menu-item>服务</el-menu-item>
          <el-menu-item>社区</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :lg="4">
        <form action>
          <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        </form>
      </el-col>
    </el-row>

    <!-- 中部 路由区域 -->
    <el-main>
      <router-view />
    </el-main>

    <!-- 底部 Footer区域 -->
    <el-row :gutter="10" class="site-footer">
      <el-col :lg="18">
        <ul class="site-list">
          <li><a href=""><i class="el-icon-map-location"></i>预约维修服务</a></li>
          <li><a href=""><i class="el-icon-map-location"></i>7天无理由退货</a></li>
          <li><a href=""><i class="el-icon-map-location"></i>15天免费换货</a></li>
          <li><a href=""><i class="el-icon-map-location"></i>满150元包邮</a></li>
          <li><a href=""><i class="el-icon-map-location"></i>520余家售后网点</a></li>
        </ul>
        <div class="site-footer-links">
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
            <dd>帮助中心</dd>
          </dl>
          <div class="footer-contact">
            <h2>400-100-5678</h2>
            <p>周一至周日 8:00-18:00</p>
            <p>（仅收市话费）</p>
            <el-button type="warning" plain>人工客服</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    
    <el-row :gutter="10" class="site-footer-bottom">
      <el-col :lg="18">
    <div class="footer-bottom">
        <div class="footer-logo"></div>
        <div class="footer-container">
          <p>
            <a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span>
            <a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span>
            <a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a>
            <span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a><span>|</span><a href="">小米商城</a>
          </p>
          <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</p>
          <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</p>
          <p>增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证</p>
        </div>
        </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:'App',
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
<style lang="scss" scoped>
body{
  overflow-x: hidden !important;/* 解决页面横向滚动条 */
}
  /* Header 样式 */
  .el-col {
    padding: 0 !important; /* 去掉响应式布局外边距*/
  }
  .stie-topbar {
    height: 40px;
    background-color: #000;
    display: flex;
    justify-content: center;
  }
  .stie-topbar .el-menu-item {
    margin: 0 10px;
    padding: 0;
  }
  .stie-topbar .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
  .stie-topbar .el-menu--horizontal > .el-menu-item {
    border: 0;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
  }
  .site-header {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    align-items: center;
  }
  .site-header .logo {
    width: 55px;
    height: 55px;
    background-color: #ff6700;
  }
  .site-header .el-menu-item {
    margin: 0 20px;
    padding: 0;
  }
  .site-header .el-menu.el-menu--horizontal {
    border: 0;
  }
  
/* 主内容 main */
.el-main{
  padding: 0;
  overflow-x: hidden !important;
}

    /* 底部 Footer */
  .site-footer,.site-footer-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .site-footer .site-list{
    display: flex;
    justify-content: center;
    align-content: center;
    border-bottom: 1px solid #e0e0e0;
  }
  .site-footer .site-list li{
    height: 25px;
    border-left: 1px solid #e0e0e0;
    padding: 0 40px;
    margin: 20px 0;
    text-align: center;
  }
  .site-footer .site-list li:first-child{
    border: 0;
  }
  .site-footer .site-list li a{
    font-size: 18px;
    color: #616161;
  }
  .site-footer .site-list li a i{
    margin-right: 5px;
    font-size: 22px;
  }
  .site-footer .site-footer-links{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .site-footer .site-footer-links dl{
    margin-right: 20px;
  }
  .site-footer .site-footer-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
  }
  .site-footer .footer-contact{
    border-left: 1px solid #e0e0e0;
    height: 112px;
    padding: 0 59px;
    margin-right: 5px;
    text-align: center;
  }
  .footer-contact h2{
    color: #ff6700;
    margin-bottom: 10px;
  }
  .site-footer-links dl{
    height: 112px;
  }
  .site-footer-links dl dt{
    margin-bottom: 10px;
  }
  .site-footer-links dl dd{
    line-height: 30px;
  }
  .footer-contact p,.site-footer-links dl dd{
    font-size: 12px;
  }
  .footer-contact .el-button{
    margin-top: 10px;
    width: 118px;
    height: 28px;
    line-height: 6px;
  }
  .site-footer-bottom{
    background: #fafafa;
  }
  .footer-bottom{
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  .footer-bottom .footer-logo{
    width: 55px;
    height: 55px;
    margin-right: 5px;
    margin-top: 5px;
    background-color: #ff6700;
  }
  .footer-container p
  ,.footer-container p a,.footer-container p span
  {
    line-height: 20px;
    color: #757575;
    font-size: 12px;
  }
  .footer-container p span{
    margin: 0 3px;
  }
</style>