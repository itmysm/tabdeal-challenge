<template>
  <div class="bg-background rounded-lg p-4 flex gap-4">
    <input
      tabindex="0"
      v-model="searchInput"
      class="w-auto text-white h-12 bg-background-secondary border-2 border-transparent focus:border-secondary focus:outline-none rounded-lg px-3 flex-grow placeholder-foreground caret-pink-500"
      type="text"
      placeholder="Search for characters..."
      @keydown.enter="onHandleSearch"
    />

    <Button
      class="min-w-12 flex gap-x-3 items-center"
      variant="primary"
      @click="onHandleSearch"
    >
      <IconsIconSearch size="14" />
      <p class="hidden md:block text-sm">Search</p>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
const emit = defineEmits(["onSearch"]);

const searchInput = ref("");

const onHandleSearch = () => {
  emit("onSearch", searchInput.value);
};
</script>
