<template>
  <div class="blog-index">
    <h2>Recent posts</h2>
    <div class="post-link"
      v-for="(post, idx) in recentPostsReversed" :key="idx">
      <a>{{ post.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-index',

  data: () => ({
    recentPosts: [
      {
        title: 'Test post',
      },
      {
        title: 'Test post 2',
      },
      {
        title: 'Test post 3',
      },
    ],
  }),

  computed: {
    recentPostsReversed() {
      return this.recentPosts.slice().reverse();
    },
  },
}
</script>

<style>
</style>
