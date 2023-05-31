<template>
    <!-- 作家全局模块 -->
  <div class="painter">
    <!-- 上部资讯框 -->
    <div class="topauthor">
        <!-- 网站名 -->
        <div @click="gohome()" class="webname">
            轻书阁
        </div>
        <!-- 标题框 -->
        <!-- <router-link to="/painter/update" active-class="active" class="paintertitle">上传作品</router-link> -->
        <router-link to="/painter/mywork" active-class="active" class="paintertitle2">我的作品</router-link>
        <router-link to="/painter/applicationmanagement" active-class="active" class="paintertitle3">交易记录</router-link>
        <!-- <router-link to="/painter/history" active-class="active" class="paintertitle4">交易历史</router-link> -->
        

        <!-- 用户框——名字 -->
        <div class="authoruser">
            <!-- 用户组件 -->
            <UserComponents/>
        </div>
    </div>

    <!-- 下面的内容 -->
    <div class="painterinfo">
        <router-view/>
    </div>
  </div>
</template>

<script>
import UserComponents from './myComponents/UserComponents'

export default {
    components:{UserComponents},
    data(){
        return{

        }
    },methods:{
        gohome(){
            this.$router.push({path:"/homebase/home"});
        }
    }
}
</script>

<style>
.paintertitle4{
    background-color: aliceblue;
    width: 200px;
    height: 50px;
    left: 820px;
    font-size: 35px;
    line-height:50px;
    text-align: center;
    position: absolute;
    color: black;
    text-decoration:none;
}

.paintertitle3{
    background-color: aliceblue;
    width: 200px;
    height: 50px;
    left: 420px;
    font-size: 35px;
    line-height:50px;
    text-align: center;
    position: absolute;
    color: black;
    text-decoration:none;
}

.paintertitle2{
    background-color: aliceblue;
    width: 200px;
    height: 50px;
    left: 220px;
    font-size: 35px;
    line-height:50px;
    text-align: center;
    position: absolute;
    color: black;
    text-decoration:none;
}

.painterinfo{
    background-color: rgb(255, 255, 255);
    width: 1300px;
    height: 1400px;
    top: 70px;
    left: 100px;
    position: absolute;
    border-radius: 20px;
}

.paintertitle{
    background-color: aliceblue;
    color: black;
    text-decoration:none;
    width: 200px;
    height: 50px;
    left: 220px;
    font-size: 35px;
    line-height:50px;
    text-align: center;
    position: absolute;
}

.authoruser{
    background-color: aliceblue;
    width: 300px;
    height: 50px;
    /* left: 1020px; */
    right: 10px;
    font-size: 30px;
    line-height:50px;
    text-align: center;
    position: absolute;
}


.webname{
    background-color: black;
    width: 200px;
    height: 50px;
    color: white;
    font-size: 35px;
    line-height:50px;
    text-align:center;
    position: absolute;
}

.topauthor{
    background-color: aliceblue;
    height: 50px;
    position: relative;
}

.painter{
  background-color: #F0C2A9;
  height: 1500px;
  min-width: 1510px;
  position: relative;
}

</style>