<template>
  <div class="bg-background">
    <GradientWrapper class="px-4">
      <Header />
      <About :character="character" />
    </GradientWrapper>

    <div v-if="status === 'success'" class="flex flex-col container mx-auto gap-y-10 mt-10 px-5 md:px-0">
      <div v-if="character?.comics.results.length" class="flex flex-col gap-y-4">
        <h2 class="text-2xl font-bold text-foreground">Comics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink class="flex justify-center p-3" v-for="comic in character?.comics.results"
            :to="`${comic.urls[0].url}`" target="_blank" rel="noopener noreferrer" :key="`comic-${comic.id}`">
            <ItemCard :item="{ name: comic.title, thumbnail: comic.thumbnail }" />
          </NuxtLink>
        </div>
      </div>

      <div v-if="character?.series.results.length" class="flex flex-col gap-y-4">
        <h2 class="text-2xl font-bold text-foreground">Series</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink class="flex justify-center p-3" v-for="series in character?.series.results"
            :to="`${series.urls[0].url}`" target="_blank" rel="noopener noreferrer" :key="`series-${series.id}`">
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

const { data: character, status, error } = await useFetch(`/api/characters/${id}`);

if (error.value) {
  navigateTo("/");
}

useHead({
  title: computed(() => character.value ? `${character.value.name} | Marvel Character Profile` : 'Marvel Character'),
  meta: [
    {
      name: 'description',
      content: computed(() => character.value 
        ? `Learn about ${character.value.name}. ${character.value.description || 'Explore their comics, series, and more information about this Marvel character.'}`
        : 'Discover Marvel character details, comics, and series.'
      )
    },
    {
      name: 'keywords',
      content: computed(() => character.value 
        ? `Marvel, ${character.value.name}, comics, series, superhero, character profile`
        : 'Marvel, character, comics, series'
      )
    },
    {
      property: 'og:title',
      content: computed(() => character.value ? `${character.value.name} | Marvel Character Profile` : 'Marvel Character')
    },
    {
      property: 'og:description',
      content: computed(() => character.value 
        ? `Learn about ${character.value.name}. ${character.value.description || 'Explore their comics, series, and more information about this Marvel character.'}`
        : 'Discover Marvel character details, comics, and series.'
      )
    },
    {
      property: 'og:type',
      content: 'profile'
    },
    {
      property: 'og:image',
      content: computed(() => character.value 
        ? `${character.value.thumbnail.path}.${character.value.thumbnail.extension}`
        : ''
      )
    }
  ]
});
</script>
