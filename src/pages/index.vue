<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import SearchCharacters from '@/components/pages/home/SearchCharacters.vue';
import GradientWrapper from '@/components/shared/GradientWrapper.vue';

</script>

<template>
  <div>
    <GradientWrapper class="px-4">
      <Header />
      <SearchCharacters />
    </GradientWrapper>
  </div>
</template>