<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 14 12"
    :class="className"
    fill="none"
  >
    <path
      d="M1.41 0 0 1.41 4.58 6 0 10.59 1.41 12l6-6z"
      fill="currentColor"
    />
    <path
      d="M8 0 6.59 1.41 11.17 6l-4.58 4.59L8 12l6-6z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: { type: [String, Number], default: 24 },
  className: { type: String, default: '' }
});
</script>
