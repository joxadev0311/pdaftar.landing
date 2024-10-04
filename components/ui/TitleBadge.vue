<template>
  <div class="title-badge">
    <h4>
      <slot>
        {{ title }}
      </slot>
    </h4>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.title-badge {
  display: inline-block;
  padding: 10px 32px;
  color: #7f56d9;
  font-family: "DM Sans";
  font-size: 15px;
  font-weight: 500;
  border-radius: 36px;
  background: #ebe9fe;
}
// 480
@media screen and (max-width: 480px) {
  .title-badge {
    padding: 8px 22px;
    margin-bottom: 12px;
  }
}
</style>
