<template>
    <div class="homeBackround">

      <!-- 类型 -->
      <div class="type">
        <p style="position: absolute;
                left: 60px;
                top: 20px;
                font-size: 30px">小说类型
        </p>
        <!-- 注意这里是类型选项键！！！！提醒自己不要忘记做功能！ -->
        <p style="position: absolute;
                left: 30px;
                top: 70px;
                font-size: 30px">仙侠
        </p>
        <p style="position: absolute;
                left: 140px;
                top: 70px;
                font-size: 30px">奇幻
        </p>
        <p style="position: absolute;
                left: 30px;
                top: 140px;
                font-size: 30px">都市
        </p>
        <p style="position: absolute;
                left: 140px;
                top: 140px;
                font-size: 30px">系统
        </p>
        <p style="position: absolute;
                left: 30px;
                top: 210px;
                font-size: 30px">科幻
        </p>
        <p style="position: absolute;
                left: 130px;
                top: 210px;
                font-size: 30px">轻小说
        </p>

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
        <div class="hotBookBox">
          <h1 class="hotTitle">热门书籍</h1>
          <div class="hot">
            <div class="botBook" v-for="n in top" key="index">
              {{ n.id }}----{{ n.bookname }}---{{ $store.state.loginForm.username }}
            </div>
          </div>
        </div>
        <div class="xianxia">
          <div class="titleBox">
            <h1>仙侠</h1>
          </div>
        </div>
        <div class="qihuan">
          <div class="titleBox">
            <h1>奇幻</h1>
          </div>
        </div>
        <div class="dushi">
          <div class="titleBox">
            <h1>都市</h1>
          </div>
        </div>
        <div class="xitong">
          <div class="titleBox">
            <h1>系统</h1>
          </div>
        </div>
        <div class="kehuan">
          <div class="titleBox">
            <h1>科幻</h1>
          </div>
        </div>
        <div class="qingxiaoshuo">
          <div class="titleBox">
            <h1>轻小说</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      top: [
        {id:1,bookname:'三体'},
        {id:2,bookname:'四体'},
        {id:3,bookname:'五体'},
        {id:4,bookname:'我的霸道总裁'},
        {id:5,bookname:'你没有霸道总裁'},
        {id:6,bookname:'我就是个女总裁'},
        {id:7,bookname:'全世界都是有钱人'},
        {id:8,bookname:'啥东西，这不是小说'}

      ],
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
.titleBox{
  text-decoration:underline;
}

.qingxiaoshuo{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 1040px;
  top: 450px;
  position: absolute;
}

.kehuan{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 680px;
  top: 450px;
  position: absolute;
}

.xitong{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 320px;
  top: 450px;
  position: absolute;
}

.dushi{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 1040px;
  top: 50px;
  position: absolute;
}

.qihuan{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 680px;
  top: 50px;
  position: absolute;
}

.xianxia{
  background-color: white;
  width: 330px;
  height: 350px;
  left: 320px;
  top: 50px;
  position: absolute;
}

.botBook{
  background-color: #ffffff;
  width: 250px;
  height: 40px;
  left: 10px;
  position: relative;

}

.hot{
  background-color: rgb(255, 255, 255);
  height: 600px;
  width: 250px;
  top: 80px;
  left: 10px;
  position: absolute;
}

.hotTitle{
  position: absolute;
  left: 70px;
  top: 20px;
  text-decoration:underline;
}

.hotBookBox{
  background-color: #ffffff;
  width: 280px;
  height: 880px;
  left: 10px;
  top: 10px;
  position: absolute;

}

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