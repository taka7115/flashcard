<template>
  <button class="btn" :class="[sizeClass, { 'is-inactive': isInactive }]">
    <img
      :src="require(`@/assets/img/${filename}`)"
      :alt="altText"
      :width="widthNum"
      :height="heightNum"
    />
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  filename: String,
  altText: String,
  widthNum: String,
  heightNum: String,
  sizeClass: String,
  isInactive: Boolean,
});
</script>

<style scoped lang="scss">
.btn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-01;
  box-shadow: $shadow;
  border-radius: 50%;
  transition: 0.3s background-color ease-in-out, 0.3s transform ease-in-out;

  @include hover {
    transform: scale(1.1);
    background-color: $color-brighter;
  }

  &.is-medium {
    width: 48px;
    height: 48px;
  }

  &.is-large {
    width: 64px;
    height: 64px;
  }

  &.is-inactive {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
