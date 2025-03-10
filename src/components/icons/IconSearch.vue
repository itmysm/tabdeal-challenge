<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 14 14"
    :class="className"
    fill="none"
  >
    <path d="M6.708 12.688A5.987 5.987 0 0 1 .73 6.708 5.987 5.987 0 0 1 6.71.73a5.987 5.987 0 0 1 5.979 5.98 5.987 5.987 0 0 1-5.98 5.979m0-11.084a5.11 5.11 0 0 0-5.104 5.104 5.11 5.11 0 0 0 5.104 5.105 5.11 5.11 0 0 0 5.105-5.105 5.11 5.11 0 0 0-5.105-5.104m6.124 11.665a.43.43 0 0 1-.309-.127l-1.166-1.167a.44.44 0 0 1 0-.618.44.44 0 0 1 .618 0l1.166 1.166c.17.17.17.45 0 .619a.43.43 0 0 1-.309.128" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: { type: [String, Number], default: 24 },
  className: { type: String, default: '' }
});
</script>
