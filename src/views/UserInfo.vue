<template>
    <!-- 消息全局模块 -->
  <div class="new">
    <!-- 上部资讯框 -->
    <div class="topauthor">
        <!-- 网站名 -->
        <div @click="gohome()" class="webname">
            轻书阁
        </div>
        <!-- 标题框 -->
        <a class="paintertitle">我的资料</a>

        <!-- 用户框——名字 -->
        <!-- 这里需要数据绑定，先用div来占位置，现在不是玩完整功能 ！！！！！！！！！！！！！！！！！！！！！！！！-->
        <div class="authoruser">
            <UserComponents/>
        </div>
    </div>

    <!-- 下面的内容 -->
    <div class="newInfo">
        <!-- 头像与资料框 -->
        <div class="userBaseInfoBox">
            <!-- 头像框 -->
            <div class="avatar">

            </div>

            <!-- 基本资料 -->
            <div class="baseInfo">
                <p style="position: absolute;
                left: 30px;
                top: 10px;
                font-size: 30px">用户名: {{$store.state.loginForm.username}}</p>
                
                <p style="position: absolute;
                left: 30px;
                top:90px;
                font-size: 30px">粉丝数: {{fans}}</p>

                <p style="position: absolute;
                left: 350px;
                top:90px;
                font-size: 30px">性别: {{sex}}</p>
            </div>

        </div> 

        <div class="renewBox">

            <div class="userInputBox">
                <!-- 注意这里，还没做数据绑定！！第六周一定要做出来！ -->
                <el-form label-width="80px">
                    <el-form-item label="用户名">
                    <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                    <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                    <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                    <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                    <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                    <el-input ></el-input>
                    </el-form-item>
                </el-form>
            </div>
            
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
            name:'张全蛋',
            fans:'10000000',
            sex: '男'
        }
    },methods:{
        gohome(){
            this.$router.push({path:"/homebase/home"});
        }
    }
}
</script>

<style scope>

.userInputBox{
    background-color: aliceblue;
    width: 1200px;
    height: 1050px;
    top: 25px;
    left: 25px;
    position: absolute;
    border-radius: 10px;
}

.renewBox{
    background-color: gray;
    width: 1250px;
    height: 1125px;
    top: 250px;
    left: 25px;
    position: absolute;
    border-radius: 10px;
}

.baseInfo{
    background-color: aliceblue;
    width: 950px;
    height: 170px;
    top: 15px;
    left: 260px;
    position: absolute;
    border-radius: 10px;
}

.avatar{
    background-color: #F0C2A9;
    width: 170px;
    height: 170px;
    top: 15px;
    left: 35px;
    position: absolute;
    border-radius: 85px;
}

.userBaseInfoBox{
    background-color: gray;
    width: 1250px;
    height: 200px;
    top: 25px;
    left: 25px;
    position: absolute;
    border-radius: 10px;
}

.newInfo{
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

.new{
  background-color: #F0C2A9;
  height: 1500px;
  min-width: 1510px;
  position: relative;
}

</style>