<template>
  <div class="bg-background">
    <GradientWrapper class="px-4">
      <Header />
      <SearchCharacters @onSearch="onHandleSearch" />
    </GradientWrapper>

    <div class="container mx-auto">
      <div v-if="characters && status === 'success'" class="mt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div
            class="flex justify-center p-3"
            v-for="character in characters.characters"
            :key="`character-${character.id}`"
          >
            <CharacterCard :character="character" />
          </div>
        </div>
      </div>

      <div
        v-else
        class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <CharacterCardSkeleton v-for="i in limit" :key="`skeleton-${i}`" />
      </div>

      <Pagination
        v-if="currentPage && characters && characters.total"
        :currentPage="currentPage"
        :totalPages="characters.totalPages"
        @change="changePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import SearchCharacters from "@/components/pages/home/SearchCharacters.vue";
import CharacterCard from "@/components/shared/characters/CharacterCard.vue";
import CharacterCardSkeleton from "@/components/shared/characters/CharacterCardSkeleton.vue";
import GradientWrapper from "@/components/shared/GradientWrapper.vue";
import Pagination from "@/components/shared/Pagination.vue";

const searchQuery = ref("");
const currentPage = ref(1);
const limit = 12;

const { data: characters, status } = useFetch("/api/characters/characters", {
  query: computed(() => ({
    page: currentPage.value,
    limit,
    search: searchQuery.value,
  })),
  watch: [currentPage, searchQuery],
});

const onHandleSearch = (search: string) => {
  searchQuery.value = search;
  currentPage.value = 1;
};

const changePage = (newPage: number) => {
  currentPage.value = newPage;
};
</script>
