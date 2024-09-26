<template>
  <button :class="setClass" class="button-el">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["setClass"],
};
</script>

<style scoped>
.button-el {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
