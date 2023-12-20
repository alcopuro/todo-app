<script setup>
import { ref, computed } from "vue";

const userName = ref("Max Mustermann");

const initialsOfUserName = computed(() => {
  const [initialOfSurname, initialOfLastName] = userName.value
    .split(" ")
    .map((namePart) => namePart[0]);
  const result = `${initialOfSurname}. ${initialOfLastName}.`;
  return result;
});
</script>

<template>
  <div class="centered wrapper">
    <nav class="navigation">
      <RouterLink to="/">My Tasks</RouterLink>
      <RouterLink to="/archive">Archive</RouterLink>
    </nav>
    <div class="desktop">Max Mustermann</div>
    <div class="mobile">{{ initialsOfUserName }}</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;

  .navigation {
    display: flex;
    gap: 2rem;
  }

  .desktop {
    display: none;
    @media (min-width: 640px) {
      display: block;
    }
  }
  .mobile {
    display: block;
    @media (min-width: 640px) {
      display: none;
    }
  }
}
</style>
