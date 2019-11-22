<template>
  <div class="blog-header">
    <div class="title-area">
      <h1 class="title">Command-line Interface</h1>
    </div>
    <div class="nav-area">
      <div class="diagonal">
      </div>
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><router-link to="/archives">Archives</router-link></li>
        <li><router-link to="/tags">Tags</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-header',

  data: () => ({
  }),
}
</script>

<style>
.blog-header {
}

.blog-header .title-area {
  width: 100%;
  height: 180px;
  background-color: #181818;
  color: transparent;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-area .title {
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  background-clip: text;
  line-height: 1.1em;
}

@media (max-width: 768px) {
  .title-area .title {
    font-size: 48px;
    margin: 0 36px;
  }
}
@media (max-width: 414px) {
  .title-area .title {
    font-size: 42px;
    margin: 0 36px;
  }
}

.nav-area {
  position: relative;
  color: white;
}

.nav-area .diagonal {
  position: absolute;
  height: 0;
}

.nav-area .diagonal::before {
  content: '';
  display: inline-block;
  width: 100vw;
  height: 160px;
  background-image: url('../assets/header-diagonal.svg');
  background-repeat: no-repeat;
  background-position: right 0;
  background-size: 100% 100%;
}

.nav-area .nav-list {
  display: inline-block;
  position: relative;
  font-size: 24px;
  list-style: none;
  margin-top: 12px;
}

.nav-list a {
  color: #ffffff;
  text-decoration: none;
}

.nav-list a:visited {
  color: #ffffff;
}
</style>
