<template>
  <div v-if="character" class="w-full flex flex-col md:flex-row gap-y-8 md:gap-x-10">
    <NuxtImg
      class="min-w-36 min-h-36 max-w-60 max-h-60 rounded-lg"
      :src="character.thumbnail.path + '.' + character.thumbnail.extension"
      :alt="character.name"
    />
    <div class="flex flex-col justify-center gap-y-4">
      <h1 class="text-3xl lg:text-4xl font-bold text-foreground">{{ character.name }}</h1>

      <p class="text-base font-medium text-foreground">{{ character.description }}</p>

      <div class="flex gap-x-4">
        <Button class="flex gap-x-3 items-center rounded-sm" size="sm" variant="outlined">
          <IconsIconExternalLink />
          <p class="text-sm font-medium">Details</p>
        </Button>
        <Button class="flex gap-x-3 items-center rounded-sm" size="sm" variant="outlined">
          <IconsIconExternalLink />
          <p class="text-sm font-medium">Wiki</p>
        </Button>
        <Button class="flex gap-x-3 items-center rounded-sm" size="sm" variant="outlined">
          <IconsIconExternalLink size="20" />
          <p class="text-sm font-medium capitalize">ComicLink</p>
        </Button>
      </div>
    </div>
  </div>
  <AboutCharacterSkeleton v-else />
</template>

<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import AboutCharacterSkeleton from "@/components/pages/character/AboutCharacterSkeleton.vue";
import type { Character } from "@/types/api";

defineProps({
  character: {
    type: Object as PropType<Character | null>,
    required: true,
  },
});
</script>
