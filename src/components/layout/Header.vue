<template>
  <header class="mb-6 md:mb-12">
    <NuxtLink class="flex w-fit" to="/">
      <img class="w-24 h-10 md:h-13 md:w-auto" :src="logo" alt="tabdeal.netlify.app"/>
    </NuxtLink>
  </header>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>