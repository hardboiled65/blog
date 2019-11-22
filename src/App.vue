<template>
  <div id="app">
    <blog />
  </div>
</template>

<script>
import Blog from './components/Blog.vue'

export default {
  name: 'app',
  components: {
    Blog,
  },

  created() {
    let path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.replace(path);
    }
  },
}
</script>

<style>
html, body, h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

ul {
  margin: 0;
}

li {
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
