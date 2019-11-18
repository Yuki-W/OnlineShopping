<!-- PC端 -->
<template>
<div class='index'>
    <!-- 走马灯 -->
    <el-row :gutter="10" class="carousel">
      <el-col :lg="18">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <!-- 小米 四小格 -->
    <el-row :gutter="10" class="index-bar">
      <el-col :lg="4">
        <ul class="home-channel-list">
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
          <li><a href=""><i class="el-icon-time"></i>小米秒杀</a></li>
        </ul>
      </el-col>
      <el-col :lg="14">
        <ul class="home-image-list">
          <li><a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c5524bbd8d8e2d8b4fec3774915d2fb.jpg?w=632&h=340" alt=""></a></li>
          <li><a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c5524bbd8d8e2d8b4fec3774915d2fb.jpg?w=632&h=340" alt=""></a></li>
          <li><a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c5524bbd8d8e2d8b4fec3774915d2fb.jpg?w=632&h=340" alt=""></a></li>
        </ul>
      </el-col>
    </el-row>

    <!-- 小米闪购 -->
    <div>
      <h1>小米闪购</h1>
      <el-row :gutter="10">
        <el-col :lg="4"></el-col>
        <el-col :lg="14"></el-col>
      </el-row>
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
<style scoped>
/* 走马灯 */
.index .carousel{
  display: flex;
  justify-content: center;
  height: 460px;
}
.index-bar{
  display: flex;
  justify-content: center;
  margin: 14px 0;
}
.index-bar .el-col{
  height: 170px;
}

/* 小米秒杀 四格 */
.home-channel-list{
  background: #5f5750;
  display: flex;
  flex-wrap: wrap;
}
.home-image-list{
  display: flex;
  justify-content: center;
}
.home-image-list li{
  margin-left: 15px;
}
.home-image-list li:first-child{
  margin-left: 0;
}
.home-image-list li a img{
  height: 170px;
  width: 270px;
}
.index-bar .home-channel-list li{
  width: 80px;
  height: 85px;
  padding: 0 5px;
  text-align: center;
  border: 1px solid #645e58;
}
.home-channel-list li:nth-child(3n){
  border-right: 0;
}
.home-channel-list a{
  display: block;
  padding-top: 18px;
  opacity: .7;
  color: white;
  font-size: 12px;
}
.home-channel-list a i{
  font-size: 22px;
  display: block;
  margin-bottom: 5px;
}
</style>