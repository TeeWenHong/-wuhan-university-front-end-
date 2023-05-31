<template>
  <div>
  <div v-for="(top, index) in displayedBooks" :key="index">
    <div class="book-cover">
      <img style="height: 200px; width: 180px;"  
      :src="require(`../../userimg/${top.picture_path}`)"/>
    </div>
    <div class="book-info">
      <!-- <h2>{{ top.picture_path }}</h2><br> -->
      <h2>作品名：{{ top.picname }}</h2>
      <!-- <h2>作品名：{{ top.pic_id }}</h2><br> -->
      <!-- <p>作者： {{ top.username }}</p><br> -->
      <h2>价格：{{ top.price }}</h2>
      <h4>简介：{{ top.brief_pic }}</h4>
      <el-button class="buttonRead" @click="deletePic(top.pic_id)">删除</el-button> <!-- 新添加的阅读按钮 -->
    </div>
  </div>
  <div class="pagination">
    <ul>
      <li v-for="(page, index) in pages" :key="index" :class="{ active: currentPage === page }">
        <a @click="currentPage = page">{{ page }}</a>
      </li>
    </ul>
  </div>
  <div style="position: relative; top:700px">
    <!-- <hr/> -->
  </div>
  <div style="border-style: solid;
              position: absolute;
              width: 300px;
              height: 300px;
              border-radius:10px;" class="uploadPic">
    
    <div class="box">
  <div class="inputBox">
    <label>照片名字:</label>
      <input type="text" v-model="photoName">
  </div>
  <div>
    <label>价格:</label>
    <input type="text" v-model="price">
  </div>
  <div>
    <label>简介:</label>
    <textarea v-model="description"></textarea>
  </div>

  <div style="background-color: white;
              width: 100px;
              height: 100px;
              top: 50px;
              position: relative;">
    <input v-if="flag2" type="file" ref="fileInput" @change="handleFileInputChange"/>
    <el-button  type="primary" @click="upload">测试文件</el-button>
    <el-button style="position: relative; left: -10px;
    top: 10px;" v-if="flag" type="primary" @click="upload2">上传文件</el-button>

  </div>
</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
name:"myWork",
data() {
  return {
    top: [],
    currentPage: 1,
    bookname: '',
    tag:'',
    file: null,
    flag:0,
    flag2:1, 
    photoName:"小宵宫", 
    price:"200",
    description:"原神，Q版，可爱，二次元",
    photo:"",
    test:"",
    file: null,
    testname:""
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
  handleFileInputChange(event) {
      this.file = event.target.files[0]
      },
      upload2() {
        console.log(this.photo)
      const formData = new FormData()
      formData.append('file', this.file)
      console.log(this.file)
      this.$http.post('/picupload1?user_id='+this.$store.state.loginForm.id+'&picname='+this.photoName+'&picture_path='+this.photo+'&price='+this.price+'&brief_pic='+this.description, formData).then(response => {
        console.log("得到图片名字2"+this.photo)
        this.$http.post('/searchPicnamePic?picture_path='+this.photo).then(response => {
          this.testname = response.data;
          console.log("得到图片名字哈哈哈"+response.data)
          this.$http.post('/indexPices?pic_id='+response.data.pic_id+'&user_id='+response.data.user_id+'&picname='+response.data.picname+'&picture_path='+response.data.picture_path+'&HASH=0'+'&price='+response.data.price+'&buy_flag=true'+'&brief_pic='+response.data.brief_pic).then(response => {

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
      this.$http.post('/picupload', formData).then(response => {
        console.log("这是图片名"+response.data.data)
        this.photo=response.data.data
        this.$http.get('savePicCache?user_id='+this.$store.state.loginForm.id+'&picture_path='+this.photo).then(response => {
          
        console.log("这是测试返回值"+this.photo)

        this.$http.get('compare?imagePath='+this.photo).then(response => {
        this.test2=response.data;
        console.log("这是相似度"+this.test2);
        if(this.test2 == 1){
          this.$message.success("图片测试成功");
          this.flag=1;
          this.flag2=0;
        }else{
          this.$message.error("相似度过高，侵权了，图片上传失败");
          // window.location.reload();
        }
      })

      })
      })
    },
      handle_success(res) {
      this.photo = res.data; 
      console.log(res);
      console.log(res.data);
      console.log(this.photoName);
      
      // const formData = new FormData()
      // formData.append('file', this.file)
      // this.$http.post('/picupload', formData).then(response => {
      // console.log(response.data.data)
      // }).catch(error => {
      //   console.log(error)
      // })


      this.$http.get('savePicCache?user_id='+1+'&picture_path='+this.photo).then(response => {
        this.test=response.data;
        console.log("这是测试返回值"+this.test)
      })

      this.$http.get('compare?imagePath='+res.data).then(response => {
        this.test2=response.data;
        console.log("这是测试返回值"+this.test2);
        if(this.test2 == 1){
          // this.$http.get('picupload1?file='+res).then(response => {
          //   console.log("测试上传主文件成功"+response.data)
          // })
          this.$message.success("图片上传成功");
        }else{
          this.$message.error("相似度过高，侵权了，图片上传失败");
          window.location.reload();
        }
      })

      // this.$message.success("图片上传成功");
      this.flag = 1;
      return (this.homeAdvertise.imgUrl = res.data);
    },
    uploadPhoto(res) {
      console.log("thishhhh"+res)
      console.log(res.data);
      
    },
  // readBook(book) {
  //   window.location.href = book.book_path;
  // },
  deletePic(pic) {
    this.$http.get('/deletePicName?pic_id='+pic).then(response => {
      this.$http.get('/deletePic1?pic_id='+pic).then(response => {

      })
      window.location.reload();
    })
  .catch(error => {
  console.log(error);
});


  // console.log(pic)
  // axios.post('/deletePic', { pic_id: pic.pic_id })
  //   .then(response => {
  //     console.log(pic)
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
}

},
  selectFile(event) {
    this.file = event.target.files[0];
  },
  uploadFile() {
    let formData = new FormData();
    formData.append('bookname', this.bookname);
    formData.append('tag', this.tag);
    formData.append('id', this.$store.state.loginForm.id); // 替换为用户ID
    formData.append('file', this.file);
    axios
      .post('/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

mounted(){

  // 展示全部书籍(作品名字，标签和位置)
  this.$http.get('/searchMyAllPic?user_id='+this.$store.state.loginForm.id).then(response => {
  this.all = response.data.length;
  this.top = Array.from({length: this.all}, () => ({username:'',picture_path:''}));
  for (let i = 0; i < response.data.length; i++) {
    this.top[i].price = response.data[i].price;
    this.top[i].picname = response.data[i].picname;
    this.top[i].pic_id = response.data[i].pic_id;
    this.top[i].username = response.data[i].username;
    this.top[i].picture_path = response.data[i].picture_path;
    this.top[i].brief_pic = response.data[i].brief_pic;
  }
}).catch(error => {
  console.log(error);
});




}
};

</script>

<style scoped>
.box{
  /* background-color: #4CAF50; */
  position: relative;
  left: 20px;
  width: 250px;
  top: 20px;
  
}
.uploadPic{
  position: absolute;
  top: 1000px;
  left: 200px;
}


.buttonRead{
  position: relative;
  left: 910px;
  top: 00px;
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