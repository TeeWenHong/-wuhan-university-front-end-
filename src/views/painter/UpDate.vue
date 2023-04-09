<template>
  <div>
    <form>
      <el-input style="width: 300px;" type="text" v-model="bookname" placeholder="书名" /> <br><br>
      <el-input style="width: 300px;" type="text" v-model="tag" placeholder="标签名" /><br><br>
      <input style="width: 230px;" type="file" @change="selectFile" />
      <el-button type="button" @click="uploadFile">上传</el-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bookname: '',
      tag:'',
      file: null,
    };
  },
  methods: {
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
  },
};
</script>


<style>

</style>