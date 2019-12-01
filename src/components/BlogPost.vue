<template>
  <div class="blog-post">
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
      })
  },
}
</script>

<style>
.content h2, h3 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.content p {
  font-family: serif;
}
</style>
