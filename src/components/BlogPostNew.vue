<template>
  <div class="blog-post-new">
    <div class="post-new-form">
      <label class="label-line" for="title">Title</label>
      <input class="post-new-input post-new-title" name="title"
        v-on:input="title = $event.target.value" />
    </div>

    <div class="post-new-form">
      <label class="label-line" for="content">Content</label>
      <textarea class="post-new-input post-new-content" name="content"
        v-on:input="content = $event.target.value">
      </textarea>
    </div>

    <div class="post-new-form">
      <label>Tags</label>
      <div class="tags">
        <post-tag
          v-for="tag in tags" :key="tag"
          :name="tag"
          :type="'edit'"
          v-on:delete="onDeleteTag(tag)">
        </post-tag>
        <div class="new-tag">
          <input
            v-bind:value="newTag"
            v-on:input="newTag = $event.target.value">
          <button
            v-on:click="onClickAddTag">+</button>
        </div>
      </div>
    </div>

    <button
      v-on:click="onClickPostButton">
      Post
    </button>
  </div>
</template>

<script>
import axios from 'axios'

import PostTag from '@/components/PostTag'

export default {
  name: 'blog-post-new',

  components: {
    PostTag,
  },

  data: () => ({
    title: '',
    content: '',
    tags: [],
    newTag: '',
  }),

  methods: {
    onClickAddTag() {
      let tagName = this.newTag;
      this.tags.push(tagName);
      this.newTag = '';
    },

    onDeleteTag(tagName) {
      let idx = this.tags.findIndex(function(tag) {
        return tag === tagName;
      })
      this.tags.splice(idx, 1);
    },

    onClickPostButton() {
      let payload = {
        title: this.title,
        content: this.content,
        tags: this.tags,
      };
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios.post('https://blog.hardboiled65.tk/api/v1/posts', payload, config)
        .then(response => {
          if (response.status === 200) {
            console.log('success');
          }
        });
    },
  },
}
</script>

<style scoped>
.post-new-form {
  margin-bottom: 12px;
}

.label-line {
  display: block;
}

</style>