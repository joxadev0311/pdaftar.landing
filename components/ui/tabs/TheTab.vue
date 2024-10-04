<template>
  <div class="tab-container">
    <div :class="['tab', { active: isActive }]" @click="toggleTab">
      <h4 ref="tabTitle">{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    selected: { type: Boolean, default: false },
    id: { type: Number, required: true },
  },
  data() {
    return {
      isActive: this.selected,
    };
  },
  watch: {
    selected(newVal) {
      this.isActive = newVal;
    },
  },
  methods: {
    toggleTab() {
      this.$emit("toggle-tab", this.id);
      
      // h4 elementini markazga olib kelish
      // this.$nextTick(() => {
      //   if (this.$refs.tabTitle) {
      //     this.$refs.tabTitle.scrollIntoView({
      //       behavior: 'smooth',
      //       block: 'center', // Markazda joylash
      //       inline: 'nearest'
      //     });
      //   }
      // });
    },
  },
};
</script>

<style scoped>
.tab-container {
  display: flex;
  flex: 1 1 calc(25% - 24px);
}
.tab {
  display: flex;
  padding: 1.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
  border-left: 4px solid #f2f4f7;
  cursor: pointer;
  transition: all 0.4s linear;
}

.active {
  border-left: 4px solid #6938ef;
  background: #eef3fc;
}

h4 {
  color: #101828;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;
  white-space: nowrap;
}

p {
  color: #475467;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5rem;
}

@media screen and (max-width: 1024px) {
  p {
    display: none;
  }
  .tab {
    border: 4px solid #f2f4f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 calc(25% - 24px);
  }
  .active {
    border: 4px solid #6938ef;
    background: #eef3fc;
  }
}
/* 768 */
@media screen and (max-width: 768px) {
  .tab {
    padding: 1rem;
  }
}
/* 380 */
@media screen and (max-width: 320px) {
  h4 {
    white-space: pre-wrap;
  }
}
</style>
