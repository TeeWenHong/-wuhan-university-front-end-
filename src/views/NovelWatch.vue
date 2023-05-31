<template>
<div>
    <div class="Box">
        <div class="WatchTitleBox">
            {{ this.title }}
        </div>
        <div class="WatchBookBox">
            {{ this.book_path }}
        </div>
    </div>
</div>
</template>
      
<script>
    
export default {
name:"watch",
data() {
return {
    top:[],
    BookTitle:'总裁',
    test:'',
    test2:'',
    title:'',
    book_path:''
  };
},
computed: {
      
},
methods: {
  readBook(book_id1) {
        
  }
},
mounted(){
    
    // console.log(this.$route.query.bookname);
    //     // 根据获取到的bookname值进行搜索操作
        this.test = this.$route.query.book_id;
        this.test2 = this.$route.query.chapters;

        this.$http.get('/searchchapters?book_id='+this.test+'&chapters='+this.test2).then(response => {
        this.all = response.data.length;
        this.book_path = response.data.book_path;
        this.title = response.data.title;
           console.log(this.book_path)
           console.log(this.title)
        console.log(searchBookName)
        }).catch(error => {
            console.log(error);
        });
    
      
}
};
    
</script>

<style scoped>

.WatchBookBox{
    background-color: rgb(255, 255, 255);
    width: 1100px;
    height: 1300px;
    position: relative;
    font-size: 22px;
    text-indent:2em;
    top:50px;
    left: 100px;
    border-radius: 0px;
    border:2px solid rgb(0, 0, 0);
}

.WatchTitleBox{
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 50px;
    position: relative;
    font-size: 30px;
    text-align:center;
    vertical-align: middle;
    top: 50px;
    left: 50%;
    border-radius: 20px;
    border:2px solid rgb(0, 0, 0);
    transform: translate(-50%,-50%);
}
.Box{
    background-color: rgb(255, 255, 255);
    width: 1300px;
    height: 1500px;
    position: relative;
    top:50px;
    left: 100px;
    border-radius: 20px;
    border:3px solid rgb(0, 0, 0);
}

</style>