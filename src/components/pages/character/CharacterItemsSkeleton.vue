<template>
  <div class="flex flex-col container mx-auto gap-y-10 mt-10 px-5 md:px-0">
    <div v-for="i in 2" :key="i" class="flex flex-col gap-y-4">
      <div class="flex flex-col gap-y-3 animate-pulse p-3">
        <span class="bg-background-secondary w-1/8 h-5 rounded-lg" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ItemCardSkeleton v-for="i in 4" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCardSkeleton from "@/components/shared/ItemCardSkeleton.vue";
</script>
