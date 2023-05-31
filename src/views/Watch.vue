<template>
<div>
  
  <div class="book-cover">
    <img style="height: 200px; width: 180px;" :src="require(`../userimg/${top[1].picture_path}`)" alt="此书无封面" />
  </div>
  <div class="book-info">
    <!-- <h2>{{ top.picture_path }}</h2><br> -->
    <h2>{{ top[1].bookname }}</h2><br>
    <h5>类型：{{ top[1].tag }}</h5>
    <p>作者： {{ top[1].username }}</p><br>
    <p>简介： {{ top[1].brief_book }}</p>
    <!-- <p>作者： {{ top.book_id }}</p><br> -->  
  </div>
  <br>
  <br>
  <br>
  <hr/>
  <div  class="read" v-for="(top, index) in displayedBooks" :key="index">
    <el-button class="buttonRead" @click="readBook(top.book_id,top.chapters)">第{{ top.chapters }}章</el-button> <!-- 新添加的阅读按钮 -->
  </div> 
    
  <div class="pagination">
    <ul>
      <li style="position:absolute;top:1200px;left: 700px;" v-for="(page, index) in pages" :key="index" :class="{ active: currentPage === page }">
        <a  @click="currentPage = page">{{ page }}</a>
      </li>
    </ul>
  </div> 
</div>
</template>
  
<script>

export default {
name:"watch",
data() {
  return {
    top: [],
    test:'',
    // top:[],
    // {coverUrl:"../../userimg/download.jpg"}
    currentPage: 1,
  };
},
computed: {
  pages() {
    const pageCount = Math.ceil(this.top.length / 40);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  },
  displayedBooks() {
    const startIndex = (this.currentPage - 1) * 40;
    const endIndex = startIndex + 40;
    return this.top.slice(startIndex, endIndex);
  }
},
methods: {
  readBook(book_id1,chapters1) {
    this.$router.push({
    path: '/novelwatch',
    query: { book_id: book_id1,
             chapters:chapters1}
    });
    window.location.reload();
    // console.log(book_id);
    // window.location.href = top.book_path;
    // this.$http.get('/searchAll?bookname=').then(response => {})
  }
},
mounted(){
  console.log(this.$route.query.book_id);
  // 根据获取到的bookname值进行搜索操作
  this.test = this.$route.query.book_id;
  // 展示全部书籍(作品名字，标签和位置)
  this.$http.get('searchBookId?book_id='+this.test).then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({bookname: '',tag:'',book_path:'',username:'',picture_path:''}));
  for (let i = 0; i < response.data.length; i++) {
    this.top[i].bookname = response.data[i].bookname;
    this.top[i].book_id = response.data[i].book_id;
    this.top[i].tag = response.data[i].tag;
    this.top[i].book_path = response.data[i].book_path;
    this.top[i].username = response.data[i].username;
    this.top[i].picture_path = response.data[i].picture_path;
    this.top[i].chapters = response.data[i].chapters;
    this.top[i].brief_book = response.data[i].brief_book;
    console.log(this.top[i].picture_path)
  }
}).catch(error => {
  console.log(error);
});
}
};

</script>
  
<style scoped>
.read{
  background-color: #4CAF50;
  /* height: 100px;
  width: 1350px;
  position: relative; */
}
  
  .buttonRead{
  background-color: aliceblue;
  width: 100px;
  /* position: relative; */
  left: 10px;
  top: 30px;
  position:relative;
  float: left;
  /* width: 200px; */
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
width: 1150px;
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