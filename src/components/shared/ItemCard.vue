<template>
  <div class="group flex flex-col gap-y-3 cursor-pointer">
    <NuxtImg
      :src="imageSource"
      :alt="item.name"
      :title="item.name"
      :placeholder="`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`"
      class="group-hover:opacity-80 transition-opacity duration-300 w-[296px] h-[391px] object-cover rounded-lg"
      loading="lazy"
      quality="60"
      format="webp"
      width="296"
      height="391"
    />
    <div class="text-base font-medium group-hover:text-primary transition-colors text-foreground truncate max-w-[296px]">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toBase64 } from "@/utils/shimmer";
import { ref } from 'vue';

const props = defineProps<{
  item: {name: string, thumbnail: {path: string, extension: string}};
}>();

const imageSource = ref(`${props.item.thumbnail.path}.${props.item.thumbnail.extension}`);
</script>
