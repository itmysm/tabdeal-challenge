<template>
  <div v-if="character" class="w-full flex flex-col md:flex-row gap-y-8 md:gap-x-10">
    <NuxtImg class="w-36 h-36 md:w-60 md:h-60 rounded-lg"
      :src="character.thumbnail.path + '.' + character.thumbnail.extension" :alt="character.name" />
    <div class="flex flex-col justify-center">
      <h1 class="text-2xl font-bold text-foreground">{{ character.name }}</h1>

      <p class="text-base font-medium text-foreground mt-5 mb-4">{{ character.description }}</p>

      <div class="flex items-center gap-x-4">
        <NuxtLink :to="`${baseUrl}/characters/${character.name.split(' ').join('-')}`" target="_blank">
          <Button :class="buttonClasses" size="sm" variant="outlined">
            <IconsIconExternalLink />
            <p class="text-sm font-medium">Details</p>
          </Button>
        </NuxtLink>
        <NuxtLink :to="`${baseUrl}/comics/characters/${character.id}`" target="_blank">
          <Button :class="buttonClasses" size="sm" variant="outlined">
            <IconsIconExternalLink size="20" />
            <p class="text-sm font-medium capitalize">ComicLink</p>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <AboutCharacterSkeleton v-else />
</template>

<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import AboutCharacterSkeleton from "@/components/pages/character/AboutCharacterSkeleton.vue";
import type { Character } from "@/types/api";

const baseUrl = 'https://www.marvel.com/';
const buttonClasses = 'flex gap-x-3 items-center rounded-base !border-neutral !text-neutral bg-transparent hover:bg-neutral/10';

defineProps({
  character: {
    type: Object as PropType<Character | null>,
    required: true,
  },
});
</script>
