<template>
    <div class="Background">
      <div class="imgBox" v-for="(item, index) in paginatedPicList" :key="index">
        <img :src="require(`../../userimg${item.slice(1)}`)" alt="" style="width: 300px; height: 300px;" />
        <div class="imgInfo">
          <p>{{ item }}</p>
          <p>价格：xxx</p>
          <p>作者：xxx</p>
        </div>
      </div>
      <div class="pagination">
        <button v-for="(page, index) in pageCount" :key="index" @click="changePage(page)" style="width: 50px; height: 50px; position: relative; left: 1150px;">
          {{ page }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Background",
    data() {
      return {
        picList: [],
        pageSize: 4,
        currentPage: 1,
      };
    },
    computed: {
      paginatedPicList() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.picList.slice(start, end);
      },
      pageCount() {
        return Math.ceil(this.picList.length / this.pageSize);
      },
    },
    mounted() {
      const files = require.context("@/userimg", true, /\.*\.jpg|jpeg|png$/).keys();
      this.picList = files;
    },
    methods: {
      changePage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  



<style scoped>
.button{
    text-align: right;
}

.imgBox {
  display: flex;
  margin-bottom: 20px;
}

.imgInfo {
  margin-left: 10px;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  margin-right: 10px;
}
.picBox2{
    background-color: rgb(91, 68, 38);
    width: 300px;
    height: 300px;
    /* position: absolute; */
}
.imgBox{
    background-color: rgb(162, 162, 162);
    width: 1350px;
    height: 300px;
    /* position:relative; */
}
.Background{
  background-color: rgb(255, 255, 255);
  width: 1400px;
  height: 1350px;
  /* position:absolute; */
}

</style>