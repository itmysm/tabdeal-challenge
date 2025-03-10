<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 16 17"
    :class="className"
    fill="none"
  >
    <path d="M8.667 8.333a.5.5 0 0 1-.354-.146.503.503 0 0 1 0-.707l5.467-5.467a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707L9.02 8.187c-.1.1-.227.146-.353.146" fill="currentColor"/>
    <path d="M14.667 5.533a.504.504 0 0 1-.5-.5v-2.7h-2.7a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h3.2c.273 0 .5.227.5.5v3.2c0 .274-.227.5-.5.5M10 15.667H6C2.38 15.667.833 14.12.833 10.5v-4C.833 2.88 2.38 1.333 6 1.333h1.333c.274 0 .5.227.5.5 0 .274-.226.5-.5.5H6c-3.073 0-4.167 1.094-4.167 4.167v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V9.167c0-.274.226-.5.5-.5.273 0 .5.226.5.5V10.5c0 3.62-1.547 5.167-5.167 5.167" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: { type: [String, Number], default: 24 },
  className: { type: String, default: '' }
});
</script>
