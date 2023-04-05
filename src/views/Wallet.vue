<template>
  <div class="wallet">

    <!-- 钱包资料 -->
    <div class="balance">
        <!-- 钱包图标 -->
        <div class="walletIcon">
            <i class="el-icon-bank-card"  style="font-size: 200px"></i>
        </div>
        <!-- 钱包信息 -->
        <div class="walletInfo">
            <p style="position: absolute;
                left: 30px;
                top: 10px;
                font-size: 30px">铜钱: {{$store.state.loginForm.money}} 贯</p>

            <el-button type="success" 
            style="position: absolute; 
            width: 100px;
            height: 80px;
            top: 110px;
            left: 500px;
            font-size: 25px; ">
                提现
            </el-button>

            <el-button type="success" 
            style="position: absolute;
            width: 100px;
            height: 80px;
            top: 110px;
            left: 600px;
            font-size: 25px; ">
                充值
            </el-button>
        </div>
    </div>

    <!-- 设定钱包信息 -->
    <div class="updateWalletInfo">

        <p style="position: absolute;
                left: 30px;
                top: 10px;
                font-size: 30px">添加数据
        </p>

        <!-- 添加数据资料 -->
        <div class="inputBox">
            <el-form label-width="80px">
            <el-form-item  label="用户名 :">
            <el-input ></el-input>
            </el-form-item>
            <el-form-item label="密码 :">
            <el-input ></el-input>
            </el-form-item>
            <el-form-item label="确认密码 :">
            <el-input ></el-input>
            </el-form-item>
            </el-form>
        </div>

        <div class="walletButton">

            <!-- 这里有未定义的按键 -->
            <el-button  type="success" 
            style="width:100px;
            margin-bottom:15px;
            width: 200px;
            border-radius: 10px;
            box-shadow:#000000 3px 3px 10px 0.1px;
            color: #000000;
            font-size: 20px;">
            确认
            </el-button>

        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            money:'1000100',
        }
    }
}
</script>

<style scoped>



.walletButton{
    /* background-color: aqua; */
    position: absolute;
    top: 380px;
    left: 1100px;
}
.inputBox{
    /* background-color: aqua; */
    top: 125px;
    left: 10px;
    height: 500px;
    width: 1300px;
    position: absolute;
}
.walletInfo{
    background-color: rgb(255, 255, 255);
    width: 925px;
    height: 200px;
    top: 25px;
    left: 350px;
    position: absolute;
    border-radius: 10px;
}
.walletIcon{
    background-color: rgb(255, 255, 255);
    width: 200px;
    height: 200px;
    top: 25px;
    left: 50px;
    position: absolute;
    border-radius: 10px;
}
.updateWalletInfo{
    background-color: gray;
    width: 1350px;
    height: 500px;
    top: 350px;
    left: 25px;
    position: absolute;
    border-radius: 10px;
}

.balance{
    background-color: gray;
    width: 1350px;
    height: 250px;
    top: 50px;
    left: 25px;
    position: absolute;
    border-radius: 10px;
}
.wallet{
  background-color: rgb(255, 255, 255);
  width: 1400px;
  height: 1300px;
  position:absolute;
  /* left: 50px; */
  /* border-radius: 20px; */
}

</style>