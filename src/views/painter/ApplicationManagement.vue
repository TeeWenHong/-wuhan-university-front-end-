<template>
  <div>
  <div v-for="(top, index) in displayedBooks" :key="index">
    <div class="book-cover">
      <img style="height: 200px; width: 180px;"  
      :src="require(`../../userimg/${top.picture_path}`)"  />
    </div>
    <div class="book-info">
      <!-- <h2>{{ top.picture_path }}</h2><br> -->
      <h2>作品名：{{ top.picname }}</h2>
      <!-- <h2>作品号：{{ top.pic_id }}</h2><br> -->
      <!-- <h2>钱：{{ top.money }}</h2> -->
      <p style="font-size: 20px;">作者:{{ top.username }} 购买你的作品</p>
      <h2>价格：{{ top.price }}</h2>
      <!-- <el-button class="buttonRead" @click="Agree(top.user_id,top.pic_id)">同意</el-button> 新添加的阅读按钮 -->
      <a class="buttonRead" @click="Reject(top.user_id,top.pic_id)">已完成</a> 
    </div>
  </div>
  <div class="pagination">
    <ul>
      <li v-for="(page, index) in pages" :key="index" :class="{ active: currentPage === page }">
        <a @click="currentPage = page">{{ page }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>

export default {
name:"myWork",
data() {
  return {
    top: [],
    currentPage: 1,
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
  Reject(user,pic) {
  //   this.$http.get('/reject?user_id='+user+"&"+"pic_id="+pic).then(response => {
  //     this.$message.success("拒绝成功"); 
  //     window.location.reload();
  //   })
  // .catch(error => {
  //   console.log(error);
  //   });
  },
  // Agree(user,pic) {
  
  //   this.$http.get('/rejectAll?pic_id='+pic).then(response => {
  //     this.$http.get('/agree?user_id='+user+"&"+"pic_id="+pic).then(response => {
  //       this.$http.get('/setBuyFlag?user_id='+user+"&"+"pic_id="+pic).then(response => {

  //         window.location.reload();
  //     });
  //       // window.location.reload();
  //     })
  //     // window.location.reload();
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     });
  //   }
},
mounted(){

  // 展示全部书籍(作品名字，标签和位置)
  this.$http.get('/toMsgId?to_user_id='+this.$store.state.loginForm.id).then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({username:''}));
  for (let i = 0; i < response.data.length; i++) {
    this.top[i].price = response.data[i].price;
    this.top[i].picname = response.data[i].picname;
    this.top[i].pic_id = response.data[i].pic_id;
    this.top[i].money = response.data[i].money;
    this.top[i].username = response.data[i].username;
    this.top[i].picture_path = response.data[i].picture_path;
  }
}).catch(error => {
  console.log(error);
});




}
};

</script>

<style scoped>
.buttonRead{
  position: relative;
  font-size: 30px;
  /* text-shadow: #4CAF50; */
  left: 900px;
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
width: 1050px;
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