<template>
  <div class="authorButtonInfo">
    <!-- 数据框 -->
    <div class="data">

      <h1 style="
      left: 20px;
      top: 20px;
      position: absolute;
      ">基本信息</h1>
      <br>
      <h2 style="
      left: 20px;
      top: 100px;
      position: absolute;">
      粉丝数:{{$store.state.loginForm.fans}} &emsp;&emsp; 
      作品数量:{{$store.state.loginForm.bookNumber}}</h2>
      <!-- <h2>作品数量:{{book}}</h2> --> 
    </div>

    <div class="bookControl">

      <h1 style="
      left: 20px;
      top: 20px;
      position: absolute;
      ">作品列表</h1> 

      <!-- 作品列表框 -->
      <div class="bookBox">
        
        <div v-for="(top, index) in displayedBooks" :key="index">
          <div class="book-cover">
            <label for="file-upload">
              <img style="height: 200px; width: 180px;" :src="require(`../../userimg/${top.picture_path}`)" alt="此书无封面" />
            </label>
          <input id="file-upload" type="file" @change="uploadFile(top)">
        </div>
        <div class="book-info">
          <!-- <h2>{{ top.picture_path }}</h2><br> -->
          <h2>{{ top.bookname }}</h2><br>
          <h5>类型：{{ top.tag }}</h5>
          <p>作者： {{ top.username }}</p><br>
          <!-- <el-button class="buttonRead" @click="readBook(top)">阅读</el-button> 新添加的阅读按钮 -->
        </div>

      </div>


      </div>
    </div>
  </div>
</template>

<script>

export default {
// name:"book",
data() {
  return {
    top: [],
    // top:[],
    // {coverUrl:"../../userimg/download.jpg"}
    currentPage: 1,
  };
},
computed: {
  pages() {
    const pageCount = Math.ceil(this.top.length / 3);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  },
  displayedBooks() {
    const startIndex = (this.currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    return this.top.slice(startIndex, endIndex);
  }
},
methods: {
  readBook(book) {
    window.location.href = book.book_path;
  },
  async uploadFile(book) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await this.$http.post('/upload1', formData);
      // 在这里处理响应，例如将上传的文件名保存到数据库中
      // 然后更新图像的URL
      book.picture_path = response.data.filename;
    } catch (error) {
      console.log(error);
    }
  }
},

mounted(){

   // 展示全部书籍(作品名字，标签和位置)
   this.$http.get('/searchId?user_id='+this.$store.state.loginForm.id).then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({bookname: '',tag:'',book_path:'',username:'',picture_path:''}));
  for (let i = 0; i < response.data.length; i++) {
    this.top[i].bookname = response.data[i].bookname;
    this.top[i].tag = response.data[i].tag;
    this.top[i].book_path = response.data[i].book_path;
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

.bookBox{
  background-color: rgb(255, 255, 255);
  width: 850px;
  height: 750px;
  position: absolute;
  top: 100px;
}

.bookControl{
  background-color: rgb(255, 255, 255);
  min-height: 870px;
  width: 850px;
  left: 25px;
  top: 230px;
  border-radius: 20px;
  position: absolute
}
.authorButtonInfo{
  top: 0px;
  left: 0px;
}
.data{
  background-color: rgb(255, 255, 255);
  height: 170px;
  width: 850px;
  left: 25px;
  top: 25px;
  border-radius: 20px;
  position: absolute
}
</style>


<style scoped>
.buttonRead{
  position: relative;
  left: 910px;
  top: 30px;
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
background-color: rgb(255, 255, 255);
display: inline-block;
margin: 10px;
width: 600px;
height: 200px;
vertical-align: top;
border-radius: 10px;
border: 1px solid black;
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