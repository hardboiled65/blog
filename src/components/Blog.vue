<template>
  <div class="blog">
    <blog-header />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader.vue'

export default {
  name: 'blog',

  components: {
    BlogHeader,
  },

  data: () => ({
    title: 'Command-line Interface',
  }),
}
</script>

<style>
.wrapper {
  max-width: 768px;
  background-color: lightgrey;
  margin: 74px auto 0 auto;
  position: relative;
  padding: 12px 60px;
  box-sizing: border-box;
}
</style>
