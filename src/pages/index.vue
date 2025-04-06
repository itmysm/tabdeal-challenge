<template>
  <div class="bg-background">
    <div class="flex flex-col items-center justify-center w-full h-full">
      <img class="w-8/12 lg:w-4/12 max-h-[70%]" :src="angry" />
      <p class="w-2/3 lg:w-2/6 text-center text-xl lg:text-2xl font-extrabold text-white">
        Thanks for the challenge... and the banana.
        “Other reasons” never tasted so fruity
      </p>
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
import angry from "@/assets/images/angry.png"
const resetTrigger = ref(false);
const searchQuery = ref("");
const currentPage = ref(1);
const limit = 12;

useHead({
  title: "Marvel Characters | Explore Marvel Universe",
  meta: [
    {
      name: 'description',
      content: 'Explore the vast Marvel Universe and discover detailed information about your favorite Marvel characters, their comics, and series.'
    },
    {
      name: 'keywords',
      content: 'Marvel, superheroes, comics, characters, Marvel Universe'
    },
    {
      property: 'og:title',
      content: 'Marvel Characters | Explore Marvel Universe'
    },
    {
      property: 'og:description',
      content: 'Explore the vast Marvel Universe and discover detailed information about your favorite Marvel characters, their comics, and series.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
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
