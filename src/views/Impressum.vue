<script lang="ts" setup>
const props = defineProps<{
  modelValue?: unknown;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: unknown): void;
}>();
</script>

<template>
  <div>
    <div class="page__content">Impressum.vue works!</div>
  </div>
</template>

<style lang="scss" scoped></style>
