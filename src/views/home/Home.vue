<template>
    <div class="homeBackround">

      <!-- 类型 -->
      <div class="type">
        hi
      </div>

      <!-- 推荐走马灯 -->
      <div class="revolvingDoor">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 平台打赏 -->
      <div class="reward">
        平台打赏
      </div>

      <!-- 推荐书籍 -->
      <div class="recommendBackground">
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
        <br>
        hi
      </div>
    </div>
</template>

<script>
export default {
  
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
  background-color: antiquewhite;
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
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>