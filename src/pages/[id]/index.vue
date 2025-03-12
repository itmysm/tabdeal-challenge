<template>
  <div class="bg-background">
    <GradientWrapper class="px-4">
      <Header />
      <About :character="character" />
    </GradientWrapper>

    <div
      v-if="status === 'success'"
      class="flex flex-col container mx-auto gap-y-10 mt-10 px-5 md:px-0"
    >
      <div class="flex flex-col gap-y-4">
        <h2 class="text-2xl font-bold text-foreground">Comics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink
            class="flex justify-center p-3"
            v-for="comic in character?.comics.results"
            :to="`${comic.urls[0].url}`"
            target="_blank"
            rel="noopener noreferrer"
            :key="`comic-${comic.id}`"
          >
            <ItemCard :item="{ name: comic.title, thumbnail: comic.thumbnail }" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-y-4">
        <h2 class="text-2xl font-bold text-foreground">Series</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink
            class="flex justify-center p-3"
            v-for="series in character?.series.results"
            :to="`${series.urls[0].url}`"
            target="_blank"
            rel="noopener noreferrer"
            :key="`series-${series.id}`"
          >
            <ItemCard :item="{ name: series.title, thumbnail: series.thumbnail }" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <CharacterItemsSkeleton v-else />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/layout/Header.vue";
import GradientWrapper from "@/components/shared/GradientWrapper.vue";
import About from "@/components/pages/character/About.vue";
import ItemCard from "@/components/shared/ItemCard.vue";
import CharacterItemsSkeleton from "@/components/pages/character/CharacterItemsSkeleton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = parseInt(route.params.id as string);

if (isNaN(id)) {
  console.error("Invalid ID parameter");
  navigateTo("/");
}

const { data: character, status, error } = await useFetch(`/api/characters/${id}`, {
  server: false,
});
</script>
