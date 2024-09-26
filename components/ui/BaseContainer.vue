<template>
  <div :class="['container', { mode }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 1300px) {
  .container {
    max-width: 90%;
  }
}
</style>
