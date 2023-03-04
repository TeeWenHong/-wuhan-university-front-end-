<template>
  <div class="authorButtonInfo">
    <!-- 数据框 -->
    <div class="data">

      <h1 style="
      left: 20px;
      top: 20px;
      position: absolute;
      ">基本信息</h1>
      <br>
      <h2 style="
      left: 20px;
      top: 100px;
      position: absolute;">
      粉丝数:{{fans}} &emsp;&emsp; 
      作品数量:{{bookNumber}}</h2>
      <!-- <h2>作品数量:{{book}}</h2> -->
    </div>

    <div class="bookControl">

      <h1 style="
      left: 20px;
      top: 20px;
      position: absolute;
      ">作品列表</h1>

      <!-- 作品列表框 -->
      <div class="bookBox">
        这里是作品
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fans:'100000000',
      bookNumber:'1',
      // 利用个人id查找书本id再遍历出来
      bookId:[

      ]
    }
  }
}
</script>

<style scoped>

.bookBox{
  background-color: rgb(92, 92, 92);
  width: 850px;
  height: 750px;
  position: absolute;
  top: 100px;
}

.bookControl{
  background-color: rgb(255, 255, 255);
  min-height: 870px;
  width: 850px;
  left: 25px;
  top: 230px;
  border-radius: 20px;
  position: absolute
}
.authorButtonInfo{
  top: 0px;
  left: 0px;
}
.data{
  background-color: rgb(255, 255, 255);
  height: 170px;
  width: 850px;
  left: 25px;
  top: 25px;
  border-radius: 20px;
  position: absolute
}
</style>