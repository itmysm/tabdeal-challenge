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
      d="M12.59 12 14 10.59 9.42 6 14 1.41 12.59 0l-6 6z"
      fill="currentColor"
    />
    <path
      d="m6 12 1.41-1.41L2.83 6l4.58-4.59L6 0 0 6z"
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
