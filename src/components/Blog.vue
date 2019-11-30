<template>
  <div class="blog">
    <blog-header
      :title="title" />
    <div class="wrapper">
      <router-view
        v-on:changeTitle="onChangeTitle"
        v-on:resetTitle="onResetTitle">
      </router-view>
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
    defaultTitle: 'Command-line Interface',
    title: 'Command-line Interface',
  }),

  computed: {
    currentTitle() {
      if (/posts\/[0-9]+/.test(this.$route.path)) {
        return 'Post title';
      }
      return this.title;
    },
  },

  methods: {
    onChangeTitle(title) {
      this.title = title;
    },

    onResetTitle() {
      this.title = this.defaultTitle;
    },
  },
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
