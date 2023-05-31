<template>
  <div>
    <div class="titleWriteBox">
      title:<el-input style="width: 300px;position: relative;left: 30px;" v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div class="chapter">
      chapter:<el-input style="width: 300px;" v-model="chapter" placeholder="请输入章节号"></el-input>
    </div>
    <mavon-editor v-model="markdown"></mavon-editor>
    <button @click="saveMarkdown">保存</button>
  </div>
</template>

<script>
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  data() {
    return {
      markdown: '测试', 
      title: '哈哈',
      chapter: 1,
      book_id: 1,
    };
  },
  methods: {
    saveMarkdown() {
      const requestData = {
        book_path: this.markdown,
        book_id: this.book_id,
        title: this.title,
        chapters: this.chapter
      };

      axios
        .post('/api/markdown', requestData)
        .then(response => {
          console.log('Markdown saved successfully');
        })
        .catch(error => {
          console.error('Failed to save Markdown', error);
        });
    },
  },
};
</script>
