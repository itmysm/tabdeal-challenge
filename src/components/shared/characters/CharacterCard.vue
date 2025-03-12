<template>
  <div class="group flex flex-col gap-y-3 cursor-pointer">
    <NuxtImg
      :src="imageSource"
      :alt="character.name"
      :placeholder="`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`"
      class="group-hover:opacity-80 transition-opacity duration-300 min-w-[296px] min-h-[391px] max-w-[352px] h-full w-full max-h-[469px] object-cover rounded-lg"
      loading="lazy"
      quality="70"
    />
    <div class="text-base group-hover:text-primary transition-colors text-foreground">
      {{ character.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from "@/types/api";
import { toBase64 } from "@/utils/shimmer";
import { ref } from 'vue';

const props = defineProps<{
  character: Character;
}>();

const imageSource = ref(`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`);
</script>
