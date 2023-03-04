<template>
  <div class="authorButtonInfo">
    <div class="box">
      <!-- 打赏费，这是历史记录，不会因为提现而减少 -->
      <div class="donateBox">
        <div class="circle">
          打赏
        </div>
        {{ donate }}贯
      </div>

      <!-- 收入，一样不会因为提现减少 -->
      <div class="incomeBox">
        <div class="circle">
          收入
        </div>
        {{income}}贯
      </div>

      <!-- 总收入，同上 -->
      <div class="totalValueBox">
        <div class="circle">
          总金额
        </div>
        {{ totalValue }}贯
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      donate:'1000',
      income:'10000',
      totalValue: '11000'
    }
  }
  
}
</script>

<style scoped>
.circle{
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 250px;
  height: 250px;
  top: 10px;
  left: 25px;
  border-radius: 200px;
  border: rgb(0, 0, 0);
  border-style: thick;
  border-width: 20px 20px;
  font-size: 50px;
  text-align:center;
  line-height: 225px;
}
.totalValueBox{
  background-color: antiquewhite;
  height: 400px;
  width: 300px;
  position: absolute;
  top: 600px;
  left: 100px;
  font-size: 40px;
  text-align:center;
  line-height: 625px;
}
.incomeBox{
  background-color: antiquewhite;
  height: 400px;
  width: 300px;
  position: absolute;
  top: 100px;
  left: 450px;
  font-size: 40px;
  text-align:center;
  line-height: 625px;
}

.donateBox{
  background-color: antiquewhite;
  height: 400px;
  width: 300px;
  position: absolute;
  top: 100px;
  left: 100px;
  font-size: 40px;
  text-align:center;
  line-height: 625px;
}
.box{
  background-color: rgb(255, 255, 255);
  height: 1150px;
  width: 850px;
  position: absolute;
  top: 25px;
  left: 25px;
  border-radius: 20px;
}
.authorButtonInfo{
  /* background-color: rgb(49, 44, 37);  */
  top: 0px;
  left: 0px;
}

</style>