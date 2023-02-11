<template>
  <div class="home">
    <div class="login-box">

      
      <div class="login-info">
        <!-- 表单位置 -->
        <el-form ref="loginFrormRef" :rules="loginRules" :model="loginForm" label-width="0" >

          <div class="username">
          用户名
          <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </div>
        <div class="password">
          密码
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" ></el-input>
        </el-form-item>
        </div>

        <!-- 登录与注册按键 -->
        <el-form-item>

          <div class="button-login">

          <el-button  type="success" style="width:60%;margin-bottom:15px;
          background-color: #86A8E7;border-radius: 20px;
          box-shadow:#000000 3px 3px 10px 0.1px;">
          入阁
          </el-button>
        
        </div>
        <div class="button-singin">
   
          <el-button   type="success" style="width:60%;margin-bottom:15px;background-color: #86A8E7;border-radius: 20px;box-shadow:#000000 3px 3px 10px 0.1px;">
          注册
          </el-button>            
          
        </div>
        </el-form-item>       
        </el-form>
        
      </div>



      <div class="login-info">
        <!-- 表单位置 -->
        <el-form ref="loginFrormRef" :rules="loginRules" :model="loginForm" label-width="0" >

          <div class="username">
          用户名
          <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </div>
        <div class="password">
          密码
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" ></el-input>
        </el-form-item>
        </div>

        <!-- 登录与注册按键 -->
        <el-form-item>

          <div class="button-login">

          <el-button @click="login" type="success" style="width:60%;margin-bottom:15px;background-color: #86A8E7;border-radius: 20px;box-shadow:#000000 3px 3px 10px 0.1px;">
          入阁
          </el-button>
        
        </div>
        <div class="button-singin">
   
          <el-button @click="mySwitch()"  type="success" style="width:60%;margin-bottom:15px;background-color: #86A8E7;border-radius: 20px;box-shadow:#000000 3px 3px 10px 0.1px;">
          注册
          </el-button>  
                    
          
        </div>
        </el-form-item>       
        </el-form>
         
      </div>

      <!-- 标题 -->
      <div class="login-title">
        <div class="title">
          轻书阁
        </div>登录
      </div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        //表单数据
        loginForm:{
          name:"Jackson",
          password:"123456"
        },
        //验证
        loginRules:{
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
        },
      };
    },
    methods:{
      mySwitch(){
        this.$router.push({path:"/singin"});
      },
    //   let flag=true
    //   const mySwitch=()=>{
    //   if(flag){
    //     $(".login-title").css("left","50%")
    //   }else{
    //     $(".login-title").css("left","0%")
    //   }
    //   flag=!flag
    // }
    login(){
      this.$refs.loginFrormRef.validate(async valid=>{
        if(!valid)return;
        const {data:res}= await this.$http.post("login",this.loginForm);
        if(res =="ok"){
          this.$message.success("登陆成功");
          this.$router.push({path:"/home"});
        }else{
          this.$message.error("登陆失败，密码或用户名错误");
        }
      })
    },
  },
  
  

}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.el-button{
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);

}

.button-login{
  /* background-color: #41dfff; */
  width: 290px;
  position:absolute;
  margin-top:60px;
  left: 80px;
  /* width: 200px; */
  /* display: flex; */
  
}

.button-singin{
  width: 290px;
  position:absolute;
  margin-top: 130px;
  left: 80px;
  /* width: 200px; */
  /* display: flex; */
}

.el-input{
  /* top:70px; */
  /* width:20px; */
  border: #41dfff;

}

.username{
  position:relative;
  top: 50px;
  left: 40px;
  /* height: 90px; */
  width: 250px;
  background-color:rgb(255, 255, 255);
  /* text-align: inherit;
  font-weight: bold; */
  font-size:120%;
  font-family:宋体;     
  
}

.password{
  position:relative;
  top: 50px;
  left: 40px;
  /* height: 90px; */
  width: 250px;
  /* width: 10px; */
  background-color:rgb(255, 255, 255);
  /* text-align: inherit;
  font-weight: bold; */
  font-size:120%;
  font-family:宋体;  

}

.title{
  background-color: antiquewhite;
  height: 230px;
  width: 210px;
  position:relative;
  top: 170px;
  font-size:1;
  border-radius: 20px;
  font-family:宋体;      
}

.login-title{
  background-color: antiquewhite;
  height: 400px;
  width: 300px;
  left: 0%;
  border-radius: 20px;
  writing-mode:tb-rl;
  font-size:450%;
  /* opacity: 0.4; */
  font-family:宋体;      
  /* margin-top:10px; */
  position:absolute;
}

.login-info{
  background-color: rgb(255, 255, 255);
  height: 400px;
  width: 280px;
  border-radius: 20px;
  display: flex;
  position: relative;
  /* opacity: 0.5; */
}

.home{
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  max-width: 1500px;
  height: 750px;
  
}

.login-box{
  height: 400px;
  width: 600px;
  position:relative;
  left: 50%;
  top: 50%;
  background-color: rgb(255, 255, 255);
  transform: translate(-50%,-50%);
  border-radius: 20px;
  display: flex;
  box-shadow:#000000 5px 5px 30px 1px;
  /* opacity: 0.5; */
}

</style>