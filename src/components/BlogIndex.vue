<template>
  <div class="blog-index">
    <h2>Recent posts</h2>
    <div class="post-link"
      v-for="(date, idx) in archivesDates" :key="idx">
      <h3>{{ date }}</h3>
      <div
        v-for="post in sortedPostsFor(date)" :key="post.post_id">
        <router-link :to="`/posts/${post.post_id}`">{{ post.title }}</router-link>
        <p>{{ post.created }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blog-index',

  data: () => ({
    recentPosts: [
      {
        title: '테스트 포스트',
      },
      {
        title: 'Test post 2',
      },
      {
        title: 'Test post 3',
      },
    ],

    archives: {
    },
  }),

  computed: {
    recentPostsReversed() {
      return this.recentPosts.slice().reverse();
    },

    archivesDates() {
      let dates = Object.keys(this.archives);
      dates = dates.sort((a, b) => {
        return a < b;
      });

      return dates;
    },
  },

  methods: {
    sortedPostsFor(date) {
      let posts = this.archives[date].slice();

      posts = posts.sort((a, b) => {
        return a.created < b.created;
      });

      return posts;
    },
  },

  created() {
    this.$emit('resetTitle');
    axios.get('https://blog.hardboiled65.tk/api/v1/archives')
      .then(response => {
        this.archives = response.data;
      });
  },
}
</script>

<style>
</style>
