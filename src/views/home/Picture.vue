<template>
  <div>
  <div v-for="(top, index) in displayedBooks" :key="index">
    <div class="book-cover">
      <img style="height: 200px; width: 180px;"  
      :src="require(`../../userimg/${top.picture_path}`)"  />
    </div>
    <div class="book-info">
      <!-- <h2>{{ top.user_id }}</h2><br> -->
      <h2>作品名：{{ top.picname }}</h2>
      <p>作者： {{ top.username }}</p>
      <h2>价格：{{ top.price }}</h2>
      <h4>简介：{{ top.brief_pic }}</h4>
      <!-- <h4>简介：{{ top.picture_path }}</h4> -->
      <el-button class="buttonRead" @click="buyPic(top.user_id,top.price,top.pic_id)">购买</el-button> <!-- 新添加的阅读按钮 -->
    </div>
  </div>
  <div class="pagination">
    <ul>
      <li v-for="(page, index) in pages" :key="index" :class="{ active: currentPage === page }">
        <a @click="currentPage = page">{{ page }}</a>
      </li>
    </ul>
  </div>
  <!-- <h2>价格：{{ this.money }}</h2> -->
</div>
</template>

<script>

export default {
name:"book",
data() {
  return {
    top: [],
    currentPage: 1,
    money:null,
  };
},
computed: {
  pages() {
    const pageCount = Math.ceil(this.top.length / 5);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  },
  displayedBooks() {
    const startIndex = (this.currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    return this.top.slice(startIndex, endIndex);
  }
},
methods: {
  // readBook(book) {
  //   window.location.href = book.book_path;
  // },
  buyPic(user_id,price,pic_id){
    if(this.$store.state.loginForm.id!=user_id){
      this.$http.get('/money?id='+this.$store.state.loginForm.id).then(response => {
      // this.money = response.date.money;
      if(response.data.money>price){
        let buyTotal =  response.data.money - price
        console.log(response.data.money);
        this.$http.get('/setMoney?id='+this.$store.state.loginForm.id+"&money="+buyTotal).then(response => {})
        this.$http.get('/money?id='+user_id).then(response => {
          let sellTotal = response.data.money+Number(price)
          console.log(sellTotal);
          this.$http.get('/setMoney?id='+user_id+"&money="+sellTotal).then(response => {})
        })
        this.$http.get('/setBuyFlag?user_id='+this.$store.state.loginForm.id+"&"+"pic_id="+pic_id).then(response => {
        // window.location.reload();
        })
        this.$http.get('/buy?user_id='+this.$store.state.loginForm.id+'&to_user_id='+user_id+'&pic_id='+pic_id).then(response => {
        window.location.reload();
        })
        this.$message.success("成功支付");  
        console.log("成功支付");
      }else{
        this.$message.error("余额不足");
        console.log("余额不足");
      }
  });
  }else{
    this.$message.error("不能购买自己的作品");
    console.log("不能购买自己的作品");
  }
    }
},
mounted(){

  // const response1 = this.$http.get('/money?id=1')
  // this.money = response1.data?.money
  // const { data: res } = await login.$http.post("login", login.loginForm);
  // 展示全部书籍(作品名字，标签和位置)
  this.$http.get('/searchAllPic?pic_id=1').then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({username:'',picture_path:'',brief_pic:''}));
    for (let i = 0; i < response.data.length; i++) {
    this.top[i].price = response.data[i].price;
    this.top[i].brief_pic = response.data[i].brief_pic;
    this.top[i].picname = response.data[i].picname;
    this.top[i].user_id = response.data[i].user_id;
    this.top[i].pic_id = response.data[i].pic_id;
    this.top[i].username = response.data[i].username;
    this.top[i].picture_path = response.data[i].picture_path;
    }
  });
  



}
};

</script>



<style scoped>
.buttonRead{
  position: relative;
  left: 910px;
  top: 0px;
  width: 100px;
}

.book-cover {
background-color: #4CAF50;
display: inline-block;
margin: 10px;
width: 180px;
height: 200px;
text-align: center;
}
.book-cover img {
background-color: aqua;
max-width: 100%;
max-height: 100%;
}
.book-info {
background-color: rgb(185, 185, 185);
display: inline-block;
margin: 10px;
width: 1100px;
height: 200px;
vertical-align: top;
}
.pagination {
margin-top: 20px;
text-align: center;
}
.pagination ul {
display: inline-block;
padding: 0;
margin: 0;
}
.pagination li {
display: inline-block;
margin-right: 10px;
padding: 5px 10px;
background-color: #ddd;
border-radius: 3px;
cursor: pointer;
}
.pagination li.active {
background-color: #4CAF50;
color: white;
}
</style>