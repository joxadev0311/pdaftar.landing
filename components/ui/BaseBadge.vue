<template>
  <div class="badge">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style scoped>
.badge {
  padding: 6px 10px;
  border-radius: 9999px;
  border: 1.5px solid #6938ef;
  color: #6938ef;
  text-align: center;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  max-width: 80px;
}
</style>
