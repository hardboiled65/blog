<template>
  <div class="blog-post">
    <div class="metadata">
      <div class="posted-date">Posted date: {{ postedDate }}</div>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blog-post',

  data: () => ({
    title: 'title',
    content: '',
    tags: [],
    postedDate: '',
  }),

  watch: {
    title(newVal) {
      this.$emit('changeTitle', newVal);
    },
  },

  created() {
    let postId = this.$route.params.id;
    axios.get('https://blog.hardboiled65.tk/api/v1/posts/' + postId)
      .then(response => {
        this.title = response.data.title;
        this.content = response.data.content;
        this.postedDate = response.data.created;
      })
  },
}
</script>

<style>
.metadata {
  margin-top: 24px;
}

.metadata .posted-date {
  font-size: 16px;
}

.content h2, h3 {
  margin-top: 24px;
  margin-bottom: 10px;
}

.content p {
  font-family: 'Noto Serif KR', serif;
  text-indent: 1.1em;
  line-height: 2em;
}

.content code {
  border: 1px dotted #181818;
  border-radius: 5px;
  padding: 0 4px;
  color: #6a737d;
}
</style>
