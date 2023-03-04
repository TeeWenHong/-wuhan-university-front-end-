<template>
    <div class="homeBackround">

      <!-- 类型 -->
      <div class="type">
        <p style="position: absolute;
                left: 60px;
                top: 20px;
                font-size: 30px">小说类型
        </p>
        <!-- 注意这里是类型选项键！！！！提醒自己不要忘记做！ -->

      </div>

      <!-- 推荐走马灯 -->
      <div class="revolvingDoor">
        <el-carousel height="350px">
          <!-- index添加之后就不报按错了 -->
          <el-carousel-item v-for="x in item" :key="x.index">
            <img :src="x.url"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 平台打赏 -->
      <div class="reward">
        <p style="position: absolute;
                left: 40px;
                top: 20px;
                font-size: 30px">平台打赏
        </p>
        <img style="width: 150px;
        position: absolute;
        top: 90px;
        left: 25px;" src="../../assets/dashang.jpg">
      </div>

      <!-- 推荐书籍 -->
      <div class="recommendBackground">
        
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      
      // 走马灯的图片，这里是死数据
      item: [
      {url:require("../../assets/santi.png")},
      {url:require("../../assets/dawangraoming.jpeg")},
      {url:require("../../assets/guimi.jpg")},
      // {url:require("../../assets/logo.png")}
      ]
    }
  }
}
</script>

<style>
/* 变长内容显示 */
.recommendBackground{
 background-color: #d3dce6;
 width: 1400px;
 height: 900px;
 top: 400px;
 position: absolute;
}

.reward{
  background-color: antiquewhite;
  width: 200px;
  height: 350px;
  left: 1200px;
  position: absolute;
}

.revolvingDoor{
  /* background-color: antiquewhite; */
  width: 900px;
  height: 350px;
  left: 275px;
  position: absolute;
}

.type{
  background-color: antiquewhite;
  width: 250px;
  height: 350px;
  position: absolute;
}

.homeBackground{
  background-color: rgb(255, 255, 255);
  position: relative;
}



/* 这是走马灯暂时css */
.el-carousel__item h3 {
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }
</style>