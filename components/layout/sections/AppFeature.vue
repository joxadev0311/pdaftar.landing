<template>
  <ui-base-container>
    <ui-title-badge title="Ilova qulayliklari"></ui-title-badge>
    <h2 class="title">Qarzlarni hisoblash endi sizni qo'rqitmaydi</h2>
    <div class="tabs">
      <the-tabs></the-tabs>
    </div>
  </ui-base-container>
</template>

<script>
// import TheTab from "@/components/ui/tabs/TheTab.vue";
import TheTabs from "../../ui/tabs/TheTabs.vue";

export default {
  components: {
    TheTabs,
    // TheTab,
  },
};
</script>

<style scoped>
.container {
  padding: 6rem 0;
}

.sub-title {
  display: inline-block;
  border-radius: 2.25rem;
  background: #ebe9fe;
  padding: 0.625rem 2rem;
  margin-bottom: 1rem;
  /* text */
  color: #7f56d9;
  font-size: 0.9375rem;
  font-weight: 500;
}

.title {
  color: #000;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.75rem;
}

/* 480 */
@media screen and (max-width: 480px) {
  .container {
    padding: 4rem 0;
  }
}
</style>
