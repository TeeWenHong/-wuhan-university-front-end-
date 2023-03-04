<template>
  <div class="background">
    <div class="top">

<!-- ---------上面的标题与搜索--------- -->
      <div @click="gohome()" class="titleHome" >
        轻书阁
      </div>

  <!-- 搜索 -->
      <div class="search">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
          style="top:20%">
        </el-input>
      </div>
      <div class="search2">
        <el-button style="background-color:rgb(83, 138, 233);">搜索</el-button>
      </div>

  <!-- 用户,购物车，钱包和通知 -->
      <div class="loginbox">
        <i class="el-icon-user"  style="font-size: 50px"></i>
        <i @click="goUser()" class="el-icon-user"  style="font-size: 50px "></i>
        <router-link to="/homebase/wallet">
          <i class="el-icon-bank-card"  style="font-size: 50px"></i>
        </router-link>
        <i @click="goNew()" class="el-icon-message-solid"  style="font-size: 50px"></i>
        <router-link to="/homebase/trolley">
          <i class="el-icon-s-goods"  style="font-size: 50px"></i>
        </router-link>
      </div>
      

    </div>

<!-- -----------选择按钮-------------- -->
    <div class="selectbox">
      <router-link to="/homebase/home" active-class="active" class="homebutton">首页</router-link>
      <router-link to="/homebase/book" active-class="active" class="homebutton2">全部作品</router-link>
      <button @click="goauthor()" class="homebutton3">作家区</button>
      <button @click="gopainter()" class="homebutton4">画师区</button>
      <!-- 暂时用gohome函数 -->
      <button @click="gohome()" class="homebutton5">插画区</button>  
     
    </div>
<!-- -----------下面的框-------------- -->
    <div class="homeinfo">      
      <router-view/>
    </div>
    
  </div>
  
</template>

<script>

export default {
    data() {
      return{
        input2:''
      }
    },
    methods:{
      gohome(){
        this.$router.push({path:"/homebase/home"});
      },
      goauthor(){
        this.$router.push({path:"/author"});
      },
      gopainter(){
        this.$router.push({path:"/painter"});
      },
      goNew(){
        this.$router.push({path:"/new"});
      },
      goUser(){
        this.$router.push({path:"/userinfo"});
      },
      
    }
}

</script>


<style>

.el-icon-s-goods{
  color: #000;
}

.el-icon-bank-card{
  color: #000;
}

.user{
  background-color: #F0C2A9;
  width: 50px;
  height: 50px;
}

.el-icon-user{
  left: 150px;
  position: absolute;
}

.homebutton{
  /* background-color: #F0C2A9; */
  height: 50px;
  width: 150px;
  position:absolute;
  left: 50px;
  text-align:center;
  font-size: 35px;
  /* color: wheat; */
  color: rgb(255, 254, 254);
  text-decoration:none;
}

.homebutton2{
  /* background-color: #F0C2A9; */
  height: 50px;
  width: 150px;
  position:absolute;
  left: 250px;
  text-align:center;
  font-size: 35px;
  color: rgb(255, 255, 255);
  text-decoration:none;
}
.homebutton3{
  /* background-color: #F0C2A9; */
  height: 50px;
  width: 150px;
  position:absolute;
  left: 450px;
  text-align:center;
  font-size: 35px;
}
.homebutton4{
  /* background-color: #F0C2A9; */
  height: 50px;
  width: 150px;
  position:absolute;
  left: 650px;
  text-align:center;
  font-size: 35px;
}
.homebutton5{
  /* background-color: #F0C2A9; */
  height: 50px;
  width: 150px;
  position:absolute;
  left: 850px;
  text-align:center;
  font-size: 35px;
}

.selectbox{
  background-color: rgb(0, 0, 0);
  height: 50px;
  position: relative;

}

.homeinfo{
  background-color: rgb(255, 255, 255);
  width: 1400px;
  height: 1300px;
  position:absolute;
  left: 50px;
  /* border-radius: 20px; */
}

.background{
  background-color: #F0C2A9;
  height: 1500px;
  min-width: 1510px;
  
}

.top{
  background-color:aliceblue;
  min-width: 1510px;
  height: 70px;
  position: relative;
}

.titleHome{
  background-color: rgb(0, 0, 0);
  color: aliceblue;
  text-align:center;
  height: 70px;
  width: 170px;
  font-size: 50px;
  position:absolute;
  left: 40px;
}

.search2{
  position:absolute;
  left: 1120px;
  top: 14px;
}

.search{
  background-color: aliceblue;
  height: 70px;
  width: 700px;
  position:absolute;
  left: 50%;
  transform: translate(-50%,0);
}

.loginbox{
  background-color: rgb(255, 255, 255);
  height: 50px;
  width: 200px;
  position:absolute;
  left: 85%;
  top: 10px;
  transform: translate(0%,0);
}


</style>
