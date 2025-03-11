<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 8 12"
    :class="className"
    fill="none"
  >
    <path d="M7.705 10.59 3.125 6l4.58-4.59L6.295 0l-6 6 6 6z" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: { type: [String, Number], default: 24 },
  className: { type: String, default: '' }
});
</script>
