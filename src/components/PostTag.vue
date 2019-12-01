<template>
  <div class="post-tag">
    <div class="name">
      <span>{{ name }}</span>
    </div>
    <div class="delete"
      v-if="type === 'edit'"
      v-on:click="onClickedDeleteButton">
      <span>X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-tag',

  props: {
    name: {
      type: String,
      required: true,
    },

    // ['link', 'edit']
    type: {
      type: String,
      default: 'link',
    },
  },

  methods: {
    onClickedDeleteButton() {
      this.$emit('delete', this.name);
    },
  },
}
</script>

<style scoped>
.post-tag {
  display: inline-flex;
}

.delete {
  border: 1px solid red;
}
</style>