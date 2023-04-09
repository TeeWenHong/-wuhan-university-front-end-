<template>
  <div class="box">
  <div v-for="(top, index) in displayedBooks" :key="index">
    <div class="book-cover">
      <img style="height: 200px; width: 180px;"  
      :src="require(`../../userimg/${top.picture_path}`)" 
      alt="此书无封面" />
    </div>
    <div class="book-info">
      <!-- <h2>{{ top.picture_path }}</h2><br> -->
      <h2>作品名：{{ top.picname }}</h2><br>
      <p>作者： {{ top.username }}</p><br>
      <h5>价格：{{ top.price }}</h5>
      <el-button class="buttonRead" @click="buyPic(top)">下载</el-button> <!-- 新添加的阅读按钮 -->
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
  
name:"book",
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
  buyPic(){

  }
},
mounted(){

  // 展示全部书籍(作品名字，标签和位置)
  this.$http.get('/searchIdPic?user_id='+this.$store.state.loginForm.id).then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({username:'',picture_path:''}));
  for (let i = 0; i < response.data.length; i++) {
    this.top[i].price = response.data[i].price;
    this.top[i].picname = response.data[i].picname;
    // this.top[i].book_path = response.data[i].book_path;
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

.box{
  background-color: aliceblue;
  height: 1150px;
  width: 850px;
  position: absolute;
  top: 25px;
  left: 25px;
  border-radius: 20px;
}
.authorButtonInfo{
  /* background-color: rgb(49, 44, 37);  */
  top: 0px;
  left: 0px;
}

.buttonRead{
  position: relative;
  left: 410px;
  top: 30px;
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
background-color: aquamarine;
display: inline-block;
margin: 10px;
width: 600px;
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