<script setup>
import { ref, computed } from "vue";
import IconTemplate from "./icons/IconTemplate.vue";

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
    <div class="name">
      <IconTemplate class="icon"></IconTemplate>
      <div class="desktop">Max Mustermann</div>
      <div class="mobile">{{ initialsOfUserName }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;

  .navigation {
    display: flex;
    gap: 2rem;
    font-size: 24px;
    a {
      font-weight: 700;
      color: #b0b0b0;
      transition: color 0.4s ease;

      &.router-link-exact-active {
        color: #4797ff;
      }
    }
  }

  .name {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .icon {
      height: 20px;
    }

    .desktop,
    .mobile {
      font-weight: 700;
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
}
</style>
