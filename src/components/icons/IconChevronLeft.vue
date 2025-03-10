<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 8 12"
    :class="className"
    fill="none"
  >
    <path d="M.295 10.59 4.875 6 .295 1.41 1.705 0l6 6-6 6z" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: { type: [String, Number], default: 24 },
  className: { type: String, default: '' }
});
</script>
