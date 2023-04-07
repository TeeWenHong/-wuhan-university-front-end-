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
            <div class="hotBook" v-for="( n,index) in top" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
            </div>
          </div>
        </div>
        <div class="xianxia">
          <div class="titleBox">
            <h1>仙侠</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in xianxia" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
        <div class="qihuan">
          <div class="titleBox">
            <h1>奇幻</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in qihuan" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
        <div class="dushi">
          <div class="titleBox">
            <h1>都市</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in dushi" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
        <div class="xitong">
          <div class="titleBox">
            <h1>系统</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in xitong" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
        <div class="kehuan">
          <div class="titleBox">
            <h1>科幻</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in kehuan" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
        <div class="qingxiaoshuo">
          <div class="titleBox">
            <h1>轻小说</h1>
          </div>
          <div class="hotBook" v-for="( n,index) in qingxiaoshuo" :key="index">
              {{ index + 1 }}----{{ n.bookname }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      top: [],
      xianxia: [],
      dushi: [],
      qihuan: [],
      xitong: [],
      kehuan: [],
      qingxiaoshuo: [],
      all: "",
      // 走马灯的图片，这里是死数据
      item: [
      {url:require("../../assets/santi.png")},
      {url:require("../../assets/dawangraoming.jpeg")},
      {url:require("../../assets/guimi.jpg")},
      // {url:require("../../assets/logo.png")}
      ]
    }
  },mounted() {
    this.$http.get('/searchBookName?bookname=').then(response => {
    this.all = response.data.length;
    this.top = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.top[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
  });

    this.$http.get('/searchTag?tag=仙侠').then(response => {
      this.all = response.data.length;
    this.xianxia = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.xianxia[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
    });

    this.$http.get('/searchTag?tag=奇幻').then(response => {
      this.all = response.data.length;
    this.qihuan = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.qihuan[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
    });

    this.$http.get('/searchTag?tag=都市').then(response => {
      this.all = response.data.length;
    this.dushi = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.dushi[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
    });

    this.$http.get('/searchTag?tag=系统').then(response => {
      this.all = response.data.length;
    this.xitong = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.xitong[i].bookname = response.data[i].bookname;
    }
    }).catch(error => {
      console.log(error);
    });
    this.$http.get('/searchTag?tag=科幻').then(response => {
      this.all = response.data.length;
    this.kehuan = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.kehuan[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
    });

    this.$http.get('/searchTag?tag=轻小说').then(response => {
      this.all = response.data.length;
    this.qingxiaoshuo = Array.from({length: this.all}, () => ({bookname: ''}));
    for (let i = 0; i < response.data.length; i++) {
      this.qingxiaoshuo[i].bookname = response.data[i].bookname;
    }
  }).catch(error => {
    console.log(error);
    });

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

.hotBook{
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