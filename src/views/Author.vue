<template>
    <!-- 作家全剧模块 -->
  <div class="author">
    <!-- 上部资讯框 -->
    <div class="topauthor">
        <!-- 网站名 -->
        <div @click="gohome()" class="webname">
            轻书阁
        </div>
        <!-- 标题框 -->
        <div class="authortitle">
            我的作品
        </div>

        <!-- 用户框——名字 -->
        <!-- 这里需要数据绑定，先用div来占位置，现在不是玩完整功能 ！！！！！！！！！！！！！！！！！！！！！！！！-->
        <div class="authoruser">
            
            <UserComponents/>
        </div>
    </div>

    <!-- 下面的内容 -->
    <div class="authorinfo">
        <!-- 控制台选择框 -->
        <div class="authorButton">
            <br>
            <router-link to="/author/control" active-class="active" class="" style="text-decoration:none; position: absolute; left: 30px;color: black;">控制台</router-link><br><br>
            <router-link to="/author/manage" active-class="active" class="" style="text-decoration:none;position: absolute; left: 30px;color: black;">作品管理</router-link><br><br>
            <router-link to="/author/datacenter" active-class="active" class="" style="text-decoration:none;position: absolute; left: 30px;color: black;">数据中心</router-link><br><br>
            <router-link to="/author/buypainting" active-class="active" class="" style="text-decoration:none;position: absolute; left: 30px;color: black;">我购买的插画</router-link><br><br>
            <router-link to="/author/updateNovel" active-class="active" class="" style="text-decoration:none;position: absolute; left: 30px;color: black;">创建书籍</router-link><br><br>
            <!-- <router-link to="/author/updateChapters" active-class="active" class="" style="text-decoration:none;position: absolute; left: 30px;color: black;">书籍写作</router-link><br><br> -->
        </div>
        <!-- 右边控制台内容 -->
        <div class="authorButtonInfo">
            <router-view/>
        </div>
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
    },
    
}
</script>

<style>

.authorButtonInfo{
    background-color: rgb(201, 201, 201);
    width: 900px;
    height: 1200px;
    left: 350px;
    top: 30px;
    border-radius: 20px;
    position: absolute;
}

.authorButton{
    background-color: rgb(201, 201, 201);
    font-size: 30px;
    color: black;
    text-decoration:none;
    width: 250px;
    height: 500px;
    top: 30px;
    left: 50px;
    position: absolute;
    border-radius: 20px;
    
}

.authorinfo{
    background-color: rgb(255, 255, 255);
    width: 1300px;
    height: 1350px;
    top: 70px;
    left: 100px;
    position: absolute;
    border-radius: 20px;
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

.authortitle{
    background-color: aliceblue;
    width: 200px;
    height: 50px;
    left: 220px;
    font-size: 35px;
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

.author{
  background-color: #F0C2A9;
  min-height: 1500px;
  min-width: 1510px;
  position: relative;
}

</style>