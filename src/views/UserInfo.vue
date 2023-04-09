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
        <div class="authoruser">
            <UserComponents/>
        </div>
    </div>

    <!-- 下面的内容 -->
    <div class="newInfo">
        <!-- 头像与资料框 -->
        <div class="userBaseInfoBox">
            <!-- 头像框 -->
            <div >
                <img class="avatar" src="../../src/assets/logo.png">
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
                font-size: 30px">粉丝数: {{$store.state.loginForm.fans}}</p>

                <p style="position: absolute;
                left: 350px; 
                top:90px;
                font-size: 30px">性别: {{$store.state.loginForm.sex}}</p>
            </div>

        </div> 

        <div class="renewBox">

            <div class="userInputBox">
               
                <el-form ref="UpdateFrormRef"  :model="UpdateForm" label-width="100" style="position: relative;
                                         left: 200px;
                                         top: 100px;">

                    <!-- <div class="username">
                    用户名
                    <el-form-item prop="username"> 
                    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    </div> -->
                    <el-form-item  label="用户名:">
                    <el-input style="width: 800px;" v-model="UpdateForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:">
                    <el-input style="width: 800px;" v-model="UpdateForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱:">
                    <el-input style="width: 800px;" v-model="UpdateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="性别:">
                    <el-input style="width: 800px;" v-model="UpdateForm.sex"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码:">
                    <el-input style="width: 800px;" v-model="UpdateForm.phone"></el-input>
                    </el-form-item>
                </el-form>
                <div class="button-login">
                    <el-button @click="UpDate()" type="success" 
                    style="width:60%;
                    margin-bottom:15px;
                    background-color: #86A8E7;
                    border-radius: 20px;
                    left: 500px;
                    top: 100px;
                    width: 300px;
                    position:relative;
                    box-shadow:#000000 3px 3px 10px 0.1px;">
                    上传
                    </el-button>
                </div> 
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
            UpdateForm:{
                username:"",
                password:"",
                email:"@gmail.com",
                sex:"",
                phone:""
        },

    }
    },methods:{
        gohome(){
            this.$router.push({path:"/homebase/home"});
        },
        UpDate() {
            this.$refs.UpdateFrormRef.validate(async (valid) => {
            if (!valid) return;
                const { data: res } = await this.$http.post("UpdateForm?id="+this.$store.state.loginForm.id, this.UpdateForm);
            if (res == "ok") {
                this.$message.success("上传成功");
                this.$router.push({ path: "/" });
            } else {
                this.$message.error("上传失败，数据不完全或网络出现问题");
    }
  });
}

    }
}
</script>

<style scope>

.el-form-item{
    /* background-color: #F0C2A9; */
    width: 100px;
}

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