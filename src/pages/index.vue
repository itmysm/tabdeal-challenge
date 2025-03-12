<template>
  <div class="bg-background">
    <GradientWrapper class="px-4">
      <Header />
      <SearchCharacters @onSearch="onHandleSearch" :reset-trigger="resetTrigger" :loading="status === 'pending'" />
    </GradientWrapper>

    <div class="container mx-auto">
      <div v-if="characters && characters.characters.length && status === 'success'" class="mt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink :to="`/${character.id}`" class="flex justify-center p-3" v-for="character in characters.characters"
            :key="`character-${character.id}`">
            <ItemCard :item="{ name: character.name, thumbnail: character.thumbnail }" />
          </NuxtLink>
        </div>
      </div>

      <div v-else-if="status === 'pending'"
        class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ItemCardSkeleton v-for="i in limit" :key="`skeleton-${i}`" />
      </div>

      <div class="mt-12" v-else-if="characters && characters.characters.length === 0">
        <NoResult @back-to-first-page="resetSearch" />
      </div>

      <Pagination v-if="characters && characters?.totalPages > 1" :currentPage="currentPage"
        :totalPages="characters.totalPages" @change="changePage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import SearchCharacters from "@/components/pages/home/SearchCharacters.vue";
import ItemCard from "@/components/shared/ItemCard.vue";
import ItemCardSkeleton from "@/components/shared/ItemCardSkeleton.vue";
import GradientWrapper from "@/components/shared/GradientWrapper.vue";
import Pagination from "@/components/shared/Pagination.vue";
import NoResult from "@/components/pages/home/NoResult.vue";

const resetTrigger = ref(false);
const searchQuery = ref("");
const currentPage = ref(1);
const limit = 12;

useHead({
  title: "Marvel Characters",
});

const { data: characters, status } = useFetch("/api/characters/characters", {
  query: computed(() => ({
    page: currentPage.value,
    limit,
    search: searchQuery.value,
  })),
  watch: [currentPage, searchQuery],
  server: false
});

const onHandleSearch = (search: string) => {
  resetTrigger.value = false;
  searchQuery.value = search;
  currentPage.value = 1;
};

const changePage = (newPage: number) => {
  currentPage.value = newPage;
};

const resetSearch = () => {
  searchQuery.value = "";
  currentPage.value = 1;
  resetTrigger.value = true;
};
</script>
