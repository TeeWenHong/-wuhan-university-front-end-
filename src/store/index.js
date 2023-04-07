import Vue from 'vue'
import Vuex from 'vuex'

// import { defineStore } from 'pinia'

Vue.use(Vuex)

// 这是第一版，请忽略
// export default new Vuex.Store({
//   state: {
//     loginForm:{
//       username:"",
//       password:"",
//       money:""
//     }
//   },
//   getters: {
//   },
//   mutations: {
//     login(state,login){
//       login.$refs.loginFrormRef.validate(async valid => {
//         if (!valid) return;
//         const { data: res } = await login.$http.post("login", login.loginForm);
        
//         if (res.flag === "ok") {
//           login.$message.success("登录成功");
//           login.$router.push({ path: "/homebase" });

//           // windows.localStorage.loginForm.username = JSON.stringify(res.user);

//           state.loginForm.username = res.user.username;
//           state.loginForm.password = res.user.password;
//           state.loginForm.money = res.user.money;

//           console.log(state.loginForm.username);
//           // console.log(res.user.username); // 打印用户信息
//           // console.log(state.loginForm.username);
//           // console.log(res.user.id);
//           // console.log(test);
//           // 将用户信息保存到Vue组件的数据中，然后在页面上显示
//           login.loggedInUser = res.user;
//         } else {
//           login.$message.error("登录失败，密码或用户名错误");
//        }
//      });
      
//     }
//   },
//   actions: {
//     login(context,loginForm){  
//       context.commit('login',loginForm)
//     }
//   },
//   modules: {
//   }
// })

export default new Vuex.Store({
  state: {
    loginForm:{
      username: localStorage.getItem("username") || "",
      password: localStorage.getItem("password") || "",
      money: localStorage.getItem("money") || "",
      fans: localStorage.getItem("fans") || "",
      bookNumber: localStorage.getItem("bookNumber") || "",
      id: localStorage.getItem("id") || "",
      sex: localStorage.getItem("sex") || "",
    }
  },
  getters: {
  },
  mutations: {
    login(state,login){
      login.$refs.loginFrormRef.validate(async valid => {
        if (!valid) return;
        const { data: res } = await login.$http.post("login", login.loginForm);
        
        if (res.flag === "ok") {
          login.$message.success("登录成功");   

          // 持久层
          state.loginForm.username = res.user.username;
          state.loginForm.password = res.user.password;
          state.loginForm.money = res.user.money;
          state.loginForm.id = res.user.id;
          state.loginForm.fans = res.user.fans;
          state.loginForm.bookNumber = res.bookNumber;
          state.loginForm.sex = res.user.sex;

          console.log(state.loginForm.id);

          localStorage.setItem("username", res.user.username);
          localStorage.setItem("password", res.user.password);
          localStorage.setItem("money", res.user.money);
          localStorage.setItem("fans", res.user.fans);
          localStorage.setItem("id", res.user.id);
          localStorage.setItem("sex", res.user.sex);
          localStorage.setItem("bookNumber", res.bookNumber);
          
          //登录后跳转
          login.$router.push({ path: "/homebase" });
          
          login.loggedInUser = res.user;
        } else {
          login.$message.error("登录失败，密码或用户名错误");
       }
     }); 
    },


  },
  actions: {
    login(context,loginForm){  
      context.commit('login',loginForm)
    }
  },
  modules: {
  }
})
