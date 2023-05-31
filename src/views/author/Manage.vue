<template>
  <div class="authorButtonInfo">
    
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
          <!-- <input id="file-upload" type="file" @change="uploadFile(top)"> -->
          <input v-if="flag2" type="file" ref="fileInput" @change="handleFileInputChange"/>
          <el-button style="position: relative; left: -10px;
    top: 10px;" v-if="flag" type="primary" @click="upload2(top.book_id)">发布当封面</el-button>
          <el-button v-if="flag2" type="primary" @click="upload">测试图片</el-button>
          <!-- ---------------------------------------------------------------------------- -->
        </div>
        <div class="book-info">
          <!-- <h2>{{ top.picture_path }}</h2><br> -->
          <h2>{{ top.bookname }}</h2>
          <h5>类型：{{ top.tag }}</h5>
          <!-- <p>作者： {{ top.book_id }}</p> -->
          <!-- <p>书号： {{ top.book_id }}</p> -->
          <el-button class="buttonRead" @click="writeBook(top.book_id)">写作</el-button> 
          <el-button style="background: red;" class="buttonRead" @click="deleteBook(top.book_id)">删除</el-button> 
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
// name:"book",
data() {
  return {
    top: [],
    // top:[],
    // {coverUrl:"../../userimg/download.jpg"}
    currentPage: 1,
    photo:"",
    currentPage: 1,
    bookname: '',
    tag:'',
    file: null,
    flag:0,
    flag2:1, 
    photoName:"", 
    price:"",
    description:"",
    test:"",
    testname:""
  };
},
computed: {
  pages() {
    const pageCount = Math.ceil(this.top.length / 4);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  },
  displayedBooks() {
    const startIndex = (this.currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    return this.top.slice(startIndex, endIndex);
  }
},
methods: {
  writeBook(book) {
    this.$router.push({
        path: '/test',
        query: { book_id: book }
        });
  },
  handleFileInputChange(event) {
      this.file = event.target.files[0]
  },
  upload2(book_id) {
        console.log(this.photo)
      const formData = new FormData()
      formData.append('file', this.file)
      console.log(this.file)
      this.$http.post('/picupload2?user_id='+this.$store.state.loginForm.id+'&picname='+this.photo+'&picture_path='+this.photo+'&price=1&brief_pic=1', formData).then(response => {
        
        this.$http.post('/searchPicnamePic?picture_path='+this.photo).then(response => {
          this.testname = response.data.picname;
          console.log("文件内容"+response.data)
          console.log("文件内容"+response.data.pic_id)
          this.pic_id=Number(response.data.pic_id);
          this.$http.post('/updateBookPic?book_id='+book_id+"&pic_id="+this.pic_id).then(response => {})
          this.$http.post('/indexPices?pic_id='+response.data.pic_id+'&user_id='+response.data.user_id+'&picname='+response.data.picname+'&picture_path='+response.data.picture_path+'&HASH='+response.data.HASH+'&price='+response.data.price+'&buy_flag=true'+'&brief_pic='+response.data.brief_pic).then(response => {

          })
          console.log('这是主要的测试'+this.testname);
      
      })
      
        // console.log("这是图片名"+response)
        console.log("这是图"+this.photo)
        this.$message.success("图片上传成功");
        window.location.reload();
      })
     
        
    },
  upload() {
      const formData = new FormData()
      formData.append('file', this.file)
      console.log("hhh"+formData)
      this.$http.post('/uploadFile1', formData).then(response => {
        console.log("这是图片名"+response.data.data)
        this.photo=response.data.data
        this.$http.get('deletePicByPath?picture_path='+this.photo).then(response => {})
        
        this.$http.get('savePicCache?user_id='+this.$store.state.loginForm.id+'&picture_path='+this.photo).then(response => {
          
        console.log("这是测试返回值"+this.photo)

      

        this.$http.get('compare?imagePath='+this.photo).then(response => {
        this.test2=response.data;
        console.log("这是相似度"+this.test2);
        if(this.test2 == 1){
// -----------------------------------------------------------------------------------------------------------------------------------
      // console.log("图片名称"+this.photo+"form"+formData)
      // // formData.append('file', this.file)
      // this.$http.post('/picupload1?user_id='+this.$store.state.loginForm.id+'&picname='+this.photo+'&picture_path='+this.photo+'&price=1&brief_pic=1', formData).then(response => {
      //   this.$http.post('/searchPicnamePic?picture_path='+this.photo).then(response => {
      //     this.testname = response.data.picname;
      //     this.$http.post('/indexPices?pic_id='+response.data.pic_id+'&user_id='+response.data.user_id+'&picname='+response.data.picname+'&picture_path='+response.data.picture_path+'&HASH='+response.data.HASH+'&price='+response.data.price+'&buy_flag=true'+'&brief_pic='+response.data.brief_pic).then(response => {
      //     })
      //     console.log('这是主要的测试'+this.testname);
      // })
      
      //   // console.log("这是图片名"+response)
      //   console.log("这是图"+this.photo)
      //   this.$message.success("图片上传成功");
      //   window.location.reload();
      // })
// -----------------------------------------------------------------------------------------------------------------------------------
          this.flag=1;
          this.flag2=0; 
          this.$message.success("图片测试成功");
          
        }else{
          this.$message.error("相似度过高，侵权了，图片上传失败");
          // window.location.reload();
        }
      })

      })
      })
    },
  deleteBook(book) {
    this.$http.get('/deleteBook?book_id='+book).then(response => {
      window.location.reload();
    })
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
    this.top[i].book_id = response.data[i].book_id;
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
  top: 90px;
}

.bookControl{
  background-color: rgb(255, 255, 255);
  min-height: 1150px;
  width: 850px;
  left: 25px;
  top: 20px;
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
  background-color: #4CAF50;
  color: black;
  position: relative;
  left: 400px;
  top: 0px;
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