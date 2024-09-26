<template>
  <div class="tab-container">
    <div :class="['tab', { active: isActive }]" @click="toggleTab">
      <h4>{{ name }}</h4>
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
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  padding: 1.5rem 0rem 1.5rem 1.5rem;
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
  /* background: #eef3fc; */
}

h4 {
  color: #101828;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;
}

p {
  color: #475467;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5rem;
}
</style>
